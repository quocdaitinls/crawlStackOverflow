import * as cheerio from "cheerio";
import {StackOverflowComment} from "../types/stackoverflow";
import {fetchCommentsOfPost} from "../utils/fetchHtml";
import {convertToList, getCommentsNode} from "../utils/findNode";
import {getContent} from "../utils/getContent";
import {getCommentId} from "../utils/getId";

export const getComments = async (
  postId: string
): Promise<StackOverflowComment[]> => {
  const listHtmlString = await fetchCommentsOfPost(postId);
  const boxCmt = cheerio.load(listHtmlString);
  const commentsNode = convertToList(boxCmt, getCommentsNode(boxCmt));

  const result: StackOverflowComment[] = commentsNode.map((elem) => {
    let id = getCommentId(elem);
    let value = getContent(elem.find(".comment-copy"));
    let date =
      elem.find("span.relativetime-clean").attr("title")?.split(",")[0] || "";

    return {id, value, date: new Date(date)};
  });

  return result;
};
