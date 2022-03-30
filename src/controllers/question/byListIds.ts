import {RequestHandler} from "express";
import {StackOverflowQuestion} from "../../types/stackoverflow";
import {crawlFromId} from "../../utils/crawl";

type RequestBody = {
  ids: string[];
};

export const generateByListIds: RequestHandler<
  {},
  StackOverflowQuestion[],
  RequestBody
> = async (req, res) => {
  const {ids} = req.body;
  const result = await Promise.all(ids.map((id) => crawlFromId(id)));

  return res.send(result);
};
