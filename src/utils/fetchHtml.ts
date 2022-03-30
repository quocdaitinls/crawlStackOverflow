import fetch from "node-fetch";
import {createFetchCommentUrlByPostId} from "./createUrl";

export const fetchHTMLString = async (url: string) => {
  const htmlStr = await fetch(url, {method: "GET"}).then((response) =>
    response.text()
  );
  return htmlStr;
};

export const fetchCommentsOfPost = async (postId: string) => {
  const url = createFetchCommentUrlByPostId(postId);
  const commentsHtmlString = await fetchHTMLString(url);

  return `<ul>${commentsHtmlString}</ul>`;
};
