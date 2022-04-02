import {RequestHandler} from "express";
import {MyRequestBody} from "../../types/request";
import {StackOverflowQuestion} from "../../types/stackoverflow";
import {crawlFromUrls} from "../../utils/crawl";

interface ReqBody extends MyRequestBody {
  urls: string[];
}

export const generateByListUrls: RequestHandler<
  {},
  StackOverflowQuestion[],
  ReqBody
> = async (req, res) => {
  const {urls, proxyToken} = req.body;
  const result = await crawlFromUrls(urls, proxyToken);

  return res.status(200).json(result);
};
