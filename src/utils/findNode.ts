import {CheerioAPI, Element, Cheerio} from "cheerio";
import {AnswerElem, CommentElem, QuestionElem} from "../types/element";
import {getHtmlId} from "./getId";

export type FindNodeFn<E = unknown> = E extends Element
  ? (...args: any[]) => Cheerio<E>
  : (...args: any[]) => Cheerio<Element>;

export const getQuestionPostNode: FindNodeFn<QuestionElem> = (
  doc: CheerioAPI
) => doc<QuestionElem, string>("#question");

export const getQuestionTitleNode: FindNodeFn = (doc: CheerioAPI) =>
  doc("#question-header .question-hyperlink");

export const getQuestionTagsNode: FindNodeFn = (
  questionPost: Cheerio<QuestionElem>
) => questionPost.find(".post-tag");

export const getAnswerPostsNode: FindNodeFn<AnswerElem> = (doc: CheerioAPI) =>
  doc<AnswerElem, string>(".answer");

export const getPostBodyNode: FindNodeFn = (post: Cheerio<Element>) =>
  post.find(".js-post-body");

export const getCommentsNode: FindNodeFn<CommentElem> = (box: CheerioAPI) =>
  box<CommentElem, string>(".comment");

export const getCommentValueNode: FindNodeFn = (cmt: Cheerio<CommentElem>) =>
  cmt.find(".comment-copy");

export const getCommentDateNode: FindNodeFn = (cmt: Cheerio<CommentElem>) =>
  cmt.find("span.relativetime-clean");

export const convertToList = <E extends Element>(
  root: CheerioAPI,
  list: Cheerio<E>
): Cheerio<E>[] => {
  let result: Cheerio<E>[] = [];
  for (let item of list) {
    let itemHTMLId = getHtmlId(item);
    let elem = root(`#${itemHTMLId}`) as Cheerio<E>;
    result.push(elem);
  }
  return result;
};
