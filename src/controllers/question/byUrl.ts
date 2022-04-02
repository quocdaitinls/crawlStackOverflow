import {RequestHandler} from "express";
import {MyRequestBody} from "../../types/request";
import {StackOverflowQuestion} from "../../types/stackoverflow";
import {crawlFromUrl} from "../../utils/crawl";
interface Body extends MyRequestBody {
  url: string;
}

export const generateByUrl: RequestHandler<
  {},
  StackOverflowQuestion,
  Body
> = async (req, res) => {
  const {url, proxyToken} = req.body;
  const result = await crawlFromUrl(url, proxyToken);

  return res.send(result);
};
