import {Cheerio, Element} from "cheerio";

export const getQuestionId = <E extends Element>(questionElem: Cheerio<E>) =>
  questionElem.attr("data-questionid") || "";

export const getAnswerId = <E extends Element>(answerElem: Cheerio<E>) =>
  answerElem.attr("data-answerid") || "";

export const getHtmlId = (elem: Element) => elem.attribs.id || "";
