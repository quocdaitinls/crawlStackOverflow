import {RequestHandler} from "express";
import {StackOverflowQuestion} from "../../types/stackoverflow";
import {crawlFromUrl} from "../../utils/crawl";

type RequestBody = {
  url: string;
};

export const generateByUrl: RequestHandler<
  {},
  StackOverflowQuestion,
  RequestBody
> = async (req, res) => {
  const {url} = req.body;
  const result = await crawlFromUrl(url);

  return res.send(result);
};
