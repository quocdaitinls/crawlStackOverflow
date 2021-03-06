import {RequestHandler} from "express";
import {BaseRequestBody} from "../../types/request";
import {SOF} from "../../types/stackoverflow";
import {crawlFromUrl} from "../../utils/crawl";
interface ReqBody extends BaseRequestBody {
  url: string;
}

export const generateByUrl: RequestHandler<{}, SOF, ReqBody> = async (
  req,
  res
) => {
  const {url, proxyToken} = req.body;
  const result = await crawlFromUrl(url, proxyToken);

  return res.status(200).json(result);
};
