import {CrawlingAPI} from "proxycrawl";
import {createFetchCommentUrlByPostId} from "./createUrl";

const PROXYCRAWL_TOKEN = "qO1X1Vf7unKBsxi8Yp3z6g";

export const fetchHTMLString = async (
  url: string,
  token: string
): Promise<string> => {
  const api = new CrawlingAPI({token});

  const htmlString = await api
    .get(url)
    .then((res) => res.body)
    .catch((err) => {
      console.log(err);
      return "";
    });

  return htmlString;
};

export const fetchCommentsOfPost = async (postId: string, token: string) => {
  const url = createFetchCommentUrlByPostId(postId);
  const commentsHtmlString = await fetchHTMLString(url, token);

  return `<ul>${commentsHtmlString}</ul>`;
};
