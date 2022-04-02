import {RequestHandler} from "express";
import {MyRequestBody} from "../../types/request";
import {StackOverflowQuestion} from "../../types/stackoverflow";
import {crawlFromIds} from "../../utils/crawl";
import {fetchPostsIdByTag} from "../../utils/fetchPostIsdByTag";

interface Body extends MyRequestBody {
  tag: string;
}

export const generateByTag: RequestHandler<
  {},
  StackOverflowQuestion[],
  Body
> = async (req, res) => {
  const {tag, proxyToken} = req.body;
  const listId = await fetchPostsIdByTag(tag, proxyToken);
  const result = await crawlFromIds(listId, proxyToken);

  return res.send(result);
};
