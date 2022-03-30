import * as cheerio from "cheerio";
import {RequestHandler} from "express";
import {StackOverflowQuestion} from "../types/stackoverflow";
import {fetchHTMLString} from "../utils/fetchHtml";
import {parseDataFromDoc} from "../utils/parseDataFromDoc";

export type TestApiRequestBody = {
  url: string;
};

export const testHandler: RequestHandler<
  {},
  StackOverflowQuestion,
  TestApiRequestBody
> = async (req, res) => {
  const {url} = req.body;
  const htmlString = await fetchHTMLString(url);
  const doc = cheerio.load(htmlString);

  const result = await parseDataFromDoc(doc);

  return res.send(result);
};
