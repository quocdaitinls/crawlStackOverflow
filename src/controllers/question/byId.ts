import {RequestHandler} from "express";
import {StackOverflowQuestion} from "../../types/stackoverflow";
import {crawlFromId} from "../../utils/crawl";

type RequestBody = {
  id: string;
};

export const generateById: RequestHandler<
  {},
  StackOverflowQuestion,
  RequestBody
> = async (req, res) => {
  const {id} = req.body;
  const result = await crawlFromId(id);

  return res.send(result);
};
