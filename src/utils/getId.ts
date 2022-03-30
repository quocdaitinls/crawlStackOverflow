import {Cheerio, Element} from "cheerio";
import {AnswerElem, CommentElem, QuestionElem} from "../types/element";

export const getQuestionId = (questionElem: Cheerio<QuestionElem>) =>
  questionElem.attr("data-questionid") || "";

export const getAnswerId = (answerElem: Cheerio<AnswerElem>) =>
  answerElem.attr("data-answerid") || "";

export const getCommentId = (commentElem: Cheerio<CommentElem>) =>
  commentElem.attr("data-comment-id") || "";

export const getHtmlId = (elem: Element) => elem.attribs.id || "";
