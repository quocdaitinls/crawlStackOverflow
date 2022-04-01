import cheerio from "cheerio";
import {createFetchQuestionsHtmlUrlByTag} from "./createUrl";
import {fetchHTMLString} from "./fetchHtml";

const fetchPostsIdByUrl = async (url: string) => {
  const htmlString = await fetchHTMLString(url);
  const doc = cheerio.load(htmlString);

  let result: string[] = [];

  const questionsNode = doc(".s-post-summary");
  questionsNode.each((index, element) => {
    result[index] = element.attribs["data-post-id"];
  });

  return result;
};

export const fetchPostsIdByTag = async (tag: string) => {
  const url = createFetchQuestionsHtmlUrlByTag(tag, 1);
  return fetchPostsIdByUrl(url);
};
