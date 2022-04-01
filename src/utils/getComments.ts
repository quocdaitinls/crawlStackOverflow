import * as cheerio from "cheerio";
import {CheerioAPI, SelectorType, Element} from "cheerio";
import {StackOverflowComment} from "../types/stackoverflow";
import {fetchCommentsOfPost} from "../utils/fetchHtml";
import {getContent} from "../utils/getContent";

export const parseComment = <E extends Element>(
  box: CheerioAPI,
  cmtNode: E
): StackOverflowComment => {
  const cmt = box(cmtNode);

  let id = cmt.attr("data-comment-id") || "";
  let value = getContent(cmt.find(".comment-copy"));
  let date =
    cmt.find("span.relativetime-clean").attr("title")?.split(",")[0] || "";

  return {id, value, date: new Date(date)};
};

export const getComments = (
  box: CheerioAPI,
  postId?: string
): StackOverflowComment[] => {
  const selector = (
    postId ? `#comments-${postId} .comment` : ".comment"
  ) as SelectorType;
  const commentNodes = box(selector);

  let result: StackOverflowComment[] = [];
  commentNodes.each((index, cmtNode) => {
    result[index] = parseComment(box, cmtNode);
  });

  return result;
};

export const fetchAllComments = async (
  postId: string
): Promise<StackOverflowComment[]> => {
  const htmlString = await fetchCommentsOfPost(postId);
  const boxCmt = cheerio.load(htmlString);

  return getComments(boxCmt);
};
