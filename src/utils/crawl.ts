import {fetchHTMLString} from "./fetchHtml";
import cheerio from "cheerio";
import {parseDataFromDoc} from "./parseDataFromDoc";
import {createQuestionUrlById} from "./createUrl";

export const crawlFromUrl = async (url: string) => {
  const htmlString = await fetchHTMLString(url);
  const doc = cheerio.load(htmlString);

  return parseDataFromDoc(doc);
};

export const crawlFromId = async (id: string) => {
  const url = createQuestionUrlById(id);
  return crawlFromUrl(url);
};
