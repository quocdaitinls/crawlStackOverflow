import {RequestHandler} from "express";
import {MyRequestBody} from "../../types/request";
import {StackOverflowQuestion} from "../../types/stackoverflow";
import {crawlFromIds} from "../../utils/crawl";

interface ReqBody extends MyRequestBody {
  ids: string[];
}

export const generateByListIds: RequestHandler<
  {},
  StackOverflowQuestion[],
  ReqBody
> = async (req, res) => {
  const {ids, proxyToken} = req.body;
  const result = await crawlFromIds(ids, proxyToken);

  return res.status(200).json(result);
};
