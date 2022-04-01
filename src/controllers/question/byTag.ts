import {RequestHandler} from "express";
import {StackOverflowQuestion} from "../../types/stackoverflow";
import {crawlFromIds} from "../../utils/crawl";
import {fetchPostsIdByTag} from "../../utils/fetchPostIsdByTag";

type RequestBody = {
  tag: string;
};

export const generateByTag: RequestHandler<
  {},
  StackOverflowQuestion[],
  RequestBody
> = async (req, res) => {
  const {tag} = req.body;
  const listId = await fetchPostsIdByTag(tag);
  const result = await crawlFromIds(listId);

  return res.send(result);
};
