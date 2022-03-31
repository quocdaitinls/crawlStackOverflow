import fetch from "node-fetch";
import request from "request";
import util from "util";
import {createFetchCommentUrlByPostId} from "./createUrl";
import {generateProxy} from "./generateProxy";

const myRequest = util.promisify(request);

export const fetchHTMLString = async (url: string) => {
  const htmlStr = await fetch(url, {method: "GET"}).then((response) =>
    response.text()
  );

  return htmlStr;
};

export const fetchHtmlStringWithProxy = async (url: string) => {
  const proxy = await generateProxy();

  const htmlStr = await myRequest({
    url,
    method: "GET",
    proxy,
  }).then((res) => res.body);

  return htmlStr;
};

export const fetchCommentsOfPost = async (postId: string) => {
  const url = createFetchCommentUrlByPostId(postId);
  const commentsHtmlString = await fetchHTMLString(url);

  return `<ul>${commentsHtmlString}</ul>`;
};
