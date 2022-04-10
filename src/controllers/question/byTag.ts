import {RequestHandler} from "express";
import {BaseRequestBody} from "../../types/request";
import {SOF} from "../../types/stackoverflow";
import {crawlFromIds} from "../../utils/crawl";
import {fetchPostsIdByTag} from "../../utils/fetchPostIsdByTag";

interface ReqBody extends BaseRequestBody {
  tag: string;
}

export const generateByTag: RequestHandler<{}, SOF[], ReqBody> = async (
  req,
  res
) => {
  const {tag, proxyToken} = req.body;
  const listId = await fetchPostsIdByTag(tag, proxyToken);
  const result = await crawlFromIds(listId, proxyToken);

  return res.status(200).json(result);
};
