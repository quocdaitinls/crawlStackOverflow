import {RequestHandler} from "express";
import {MyRequestBody} from "../../types/request";
import {StackOverflowQuestion} from "../../types/stackoverflow";
import {crawlFromId} from "../../utils/crawl";

interface Body extends MyRequestBody {
  id: string;
}

export const generateById: RequestHandler<
  {},
  StackOverflowQuestion,
  Body
> = async (req, res) => {
  const {id, proxyToken} = req.body;
  const result = await crawlFromId(id, proxyToken);

  return res.send(result);
};
