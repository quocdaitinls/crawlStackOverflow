import * as cheerio from "cheerio";
import {StackOverflowComment} from "../types/stackoverflow";
import {fetchCommentsOfPost} from "../utils/fetchHtml";
import {
  convertToList,
  getCommentDateNode,
  getCommentsNode,
  getCommentValueNode,
} from "../utils/findNode";
import {getContent} from "../utils/getContent";
import {getCommentId} from "../utils/getId";

export const getComments = async (
  postId: string
): Promise<StackOverflowComment[]> => {
  const listHtmlString = await fetchCommentsOfPost(postId);
  const boxCmt = cheerio.load(listHtmlString);
  const commentsNode = convertToList(boxCmt, getCommentsNode(boxCmt));

  const result: StackOverflowComment[] = commentsNode.map((cmtNode) => {
    let id = getCommentId(cmtNode);
    let value = getContent(getCommentValueNode(cmtNode));
    let date = getCommentDateNode(cmtNode).attr("title")?.split(",")[0] || "";

    return {id, value, date: new Date(date)};
  });

  return result;
};
