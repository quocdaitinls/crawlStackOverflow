import {RequestHandler} from "express";
import {StackOverflowQuestion} from "../../types/stackoverflow";
import {crawlFromIds} from "../../utils/crawl";

type RequestBody = {
  ids: string[];
};

export const generateByListIds: RequestHandler<
  {},
  StackOverflowQuestion[],
  RequestBody
> = async (req, res) => {
  const {ids} = req.body;
  const result = await crawlFromIds(ids);

  return res.send(result);
};
