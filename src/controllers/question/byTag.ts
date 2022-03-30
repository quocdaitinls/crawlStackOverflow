import {RequestHandler} from "express";
import {StackOverflowQuestion} from "../../types/stackoverflow";
import {crawlFromIds, crawlFromUrls} from "../../utils/crawl";
import {fetchPostsIdByTag} from "../../utils/fetchPostIsdByTag";

type RequestBody = {
  tag: string;
  count: number;
};

export const generateByTag: RequestHandler<
  {},
  StackOverflowQuestion[],
  // string[],
  RequestBody
> = async (req, res) => {
  const {tag, count} = req.body;

  const listId = await fetchPostsIdByTag(tag, count);

  const result = await crawlFromIds(listId);

  console.log(result);
  // const result = await crawlFromUrls(urls);
  return res.send(result);
};
