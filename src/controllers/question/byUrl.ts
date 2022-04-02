import {RequestHandler} from "express";
import {MyRequestBody} from "../../types/request";
import {StackOverflowQuestion} from "../../types/stackoverflow";
import {crawlFromUrl} from "../../utils/crawl";
interface ReqBody extends MyRequestBody {
  url: string;
}

export const generateByUrl: RequestHandler<
  {},
  StackOverflowQuestion,
  ReqBody
> = async (req, res) => {
  const {url, proxyToken} = req.body;
  const result = await crawlFromUrl(url, proxyToken);

  return res.status(200).json(result);
};
