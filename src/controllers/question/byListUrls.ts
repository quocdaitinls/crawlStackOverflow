import {RequestHandler} from "express";
import {StackOverflowQuestion} from "../../types/stackoverflow";
import {crawlFromUrl} from "../../utils/crawl";

type RequestBody = {
  urls: string[];
};

export const generateByListUrls: RequestHandler<
  {},
  StackOverflowQuestion[],
  RequestBody
> = async (req, res) => {
  const {urls} = req.body;
  const result = await Promise.all(urls.map((url) => crawlFromUrl(url)));

  return res.send(result);
};
