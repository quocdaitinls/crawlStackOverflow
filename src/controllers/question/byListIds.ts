import {RequestHandler} from "express";
import {BaseRequestBody} from "../../types/request";
import {Question} from "../../types/stackoverflow";
import {crawlFromIds} from "../../utils/crawl";

interface ReqBody extends BaseRequestBody {
  ids: string[];
}

export const generateByListIds: RequestHandler<
  {},
  Question[],
  ReqBody
> = async (req, res) => {
  const {ids, proxyToken} = req.body;
  const result = await crawlFromIds(ids, proxyToken);

  return res.status(200).json(result);
};
