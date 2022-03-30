import {Element} from "cheerio";

export interface QuestionElem extends Element {
  attrs: {
    ["data-questionid"]: string;
  };
}

export interface AnswerElem extends Element {
  attrs: {
    ["data-answerid"]: string;
  };
}

export interface BoxCommentElem extends Element {}

export interface CommentElem extends Element {
  attrs: {
    ["data-comment-id"]: string;
  };
}
