import {fetchHTMLString} from "./fetchHtml";
import cheerio from "cheerio";
import parseDoc from "./parseDoc";
import {createFetchQuestionHtmlUrlById} from "./createUrl";

export const crawlFromUrl = async (url: string, token: string) => {
  const htmlString = await fetchHTMLString(url, token);
  const doc = cheerio.load(htmlString);

  return parseDoc(doc);
};

export const crawlFromUrls = async (urls: string[], token: string) =>
  Promise.all(urls.map((url) => crawlFromUrl(url, token)));

export const crawlFromId = async (id: string, token: string) => {
  const url = createFetchQuestionHtmlUrlById(id);
  return crawlFromUrl(url, token);
};

export const crawlFromIds = async (ids: string[], token: string) =>
  Promise.all(ids.map((id) => crawlFromId(id, token)));
