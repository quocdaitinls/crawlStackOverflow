import {Cheerio, CheerioAPI, Element} from "cheerio";
import {
  Question,
  StackOverflowPost,
  StackOverflowQuestion,
} from "../types/stackoverflow";
import {getContent} from "./getContent";
import {getAnswerId, getQuestionId} from "./getId";
import {getComments} from "./getComments";
import {getTags} from "./getTags";

export const parsePost = <E extends Element>(
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

export const parseQuestionPost = <E extends Element>(
  doc: CheerioAPI,
  post: Cheerio<E>
): Question => ({
  ...parsePost(doc, post, getQuestionId),
  tags: getTags(doc, post),
});

const parseDoc = async (doc: CheerioAPI): Promise<StackOverflowQuestion> => {
  const questionPost = doc("#question");
  const answerNodes = doc(".answer");

  let title = doc("#question-header h1").text();
  let question = parseQuestionPost(doc, questionPost);
  let answers: StackOverflowPost[] = [];

  answerNodes.each((index, answerNode) => {
    let answer = doc(answerNode);
    answers[index] = parsePost(doc, answer, getAnswerId);
  });

  return {
    title,
    question,
    answers,
  };
};

export default parseDoc;
