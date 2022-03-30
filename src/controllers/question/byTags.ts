import {RequestHandler} from "express";
import {StackOverflowQuestion} from "../../types/stackoverflow";
import {crawlFromUrls} from "../../utils/crawl";

type RequestBody = {
  tags: string[];
};

export const generateByListUrls: RequestHandler<
  {},
  StackOverflowQuestion[],
  RequestBody
> = async (req, res) => {
  // const {urls} = req.body;
  // const result = await crawlFromUrls(urls);
  // return res.send(result);
};
