import {RequestHandler} from "express";
import {BaseRequestBody} from "../../types/request";
import {Question} from "../../types/stackoverflow";
import {crawlFromId} from "../../utils/crawl";

interface ReqBody extends BaseRequestBody {
  id: string;
}

export const generateById: RequestHandler<{}, Question, ReqBody> = async (
  req,
  res
) => {
  const {id, proxyToken} = req.body;
  const result = await crawlFromId(id, proxyToken);

  return res.status(200).json(result);
};
