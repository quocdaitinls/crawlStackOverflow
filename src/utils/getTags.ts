import {Cheerio} from "cheerio";
import {QuestionElem} from "../types/element";
import {getQuestionTagsNode} from "../utils/findNode";

export const getTags = (questionPost: Cheerio<QuestionElem>) => {
  const MARKUP_CHARACTER = "<~>";

  const wrapTagValue = (tag: string) =>
    `${MARKUP_CHARACTER}${tag}${MARKUP_CHARACTER}`;

  const questionTagsNode = getQuestionTagsNode(questionPost);

  return questionTagsNode
    .text((number, str) => wrapTagValue(str))
    .text()
    .split(MARKUP_CHARACTER)
    .filter((text) => text !== "");
};
