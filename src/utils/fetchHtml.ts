import fetch from "node-fetch";

export const fetchHTMLString = async (url: string) => {
  const html = await fetch(url, {method: "GET"}).then((response) =>
    response.text()
  );
  return html;
};

export const fetchCommentsOfPost = async (postId: string) => {
  const url = `https://stackoverflow.com/posts/${postId}/comments`;

  const commentsHtmlString = await fetchHTMLString(url);
  return `<ul>${commentsHtmlString}</ul>`;
};
