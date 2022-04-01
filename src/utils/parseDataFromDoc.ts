import {Cheerio, CheerioAPI, Element} from "cheerio";
import {
  Question,
  StackOverflowPost,
  StackOverflowQuestion,
} from "../types/stackoverflow";
import {getContent} from "../utils/getContent";
import {getAnswerId, getQuestionId} from "../utils/getId";
import {getComments} from "./getComments";
import {getTags} from "./getTags";

export const parseDataFromPost = <E extends Element>(
  doc: CheerioAPI,
  post: Cheerio<E>,
  getIdFnc: (post: Cheerio<E>) => string
): StackOverflowPost => {
  const postBody = post.find(".js-post-body");

  return {
    id: getIdFnc(post),
    content: getContent(postBody),
    comments: getComments(doc, getIdFnc(post)),
  };
};

export const parseDataFromQuestionPost = <E extends Element>(
  doc: CheerioAPI,
  post: Cheerio<E>
): Question => ({
  ...parseDataFromPost(doc, post, getQuestionId),
  tags: getTags(doc, post),
});

export const parseDataFromDoc = async (
  doc: CheerioAPI
): Promise<StackOverflowQuestion> => {
  const questionPost = doc("#question");
  const answerNodes = doc(".answer");

  let title = doc("#question-header h1").text();
  let question = parseDataFromQuestionPost(doc, questionPost);
  let answers: StackOverflowPost[] = [];

  answerNodes.each((index, answerNode) => {
    let answer = doc(answerNode);
    answers[index] = parseDataFromPost(doc, answer, getAnswerId);
  });

  return {
    title,
    question,
    answers,
  };
};
