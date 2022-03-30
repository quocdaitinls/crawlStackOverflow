import {fetchHTMLString} from "./fetchHtml";
import cheerio from "cheerio";
import {parseDataFromDoc} from "./parseDataFromDoc";
import {createFetchQuestionHtmlUrlById} from "./createUrl";

export const crawlFromUrl = async (url: string) => {
  const htmlString = await fetchHTMLString(url);
  const doc = cheerio.load(htmlString);

  return parseDataFromDoc(doc);
};

export const crawlFromUrls = async (urls: string[]) =>
  Promise.all(urls.map((url) => crawlFromUrl(url)));

export const crawlFromId = async (id: string) => {
  const url = createFetchQuestionHtmlUrlById(id);
  return crawlFromUrl(url);
};

export const crawlFromIds = async (ids: string[]) =>
  Promise.all(ids.map((id) => crawlFromId(id)));
