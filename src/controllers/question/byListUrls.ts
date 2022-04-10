import {RequestHandler} from "express";
import {BaseRequestBody} from "../../types/request";
import {SOF} from "../../types/stackoverflow";
import {crawlFromUrls} from "../../utils/crawl";

interface ReqBody extends BaseRequestBody {
  urls: string[];
}

export const generateByListUrls: RequestHandler<{}, SOF[], ReqBody> = async (
  req,
  res
) => {
  const {urls, proxyToken} = req.body;
  const result = await crawlFromUrls(urls, proxyToken);

  return res.status(200).json(result);
};
