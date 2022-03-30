import {Cheerio, CheerioAPI} from "cheerio";
import {QuestionElem} from "../types/element";
import {
  Question,
  StackOverflowPost,
  StackOverflowQuestion,
} from "../types/stackoverflow";
import {
  convertToList,
  getAnswerPostsNode,
  getPostBodyNode,
  getQuestionPostNode,
  getQuestionTitleNode,
} from "../utils/findNode";
import {getContent} from "../utils/getContent";
import {getAnswerId, getQuestionId} from "../utils/getId";
import {getComments} from "./getComments";
import {getTags} from "./getTags";

export const parseDataFromPost = async <E>(
  post: Cheerio<E>,
  getIdFnc: (post: Cheerio<E>) => string
): Promise<StackOverflowPost> => {
  const body = getPostBodyNode(post);

  const id = getIdFnc(post);
  const content = getContent(body);
  const comments = await getComments(id);

  return {
    id,
    content,
    comments,
  };
};

export const parseDataFromQuestionPost = async (
  post: Cheerio<QuestionElem>
): Promise<Question> => ({
  ...(await parseDataFromPost(post, getQuestionId)),
  tags: getTags(post),
});

export const parseDataFromDoc = async (
  doc: CheerioAPI
): Promise<StackOverflowQuestion> => {
  const questionPost = getQuestionPostNode(doc);
  const answerPosts = convertToList(doc, getAnswerPostsNode(doc));

  const title = getQuestionTitleNode(doc).text();
  const question = await parseDataFromQuestionPost(questionPost);
  const answers = await Promise.all(
    answerPosts.map((answerPost) => parseDataFromPost(answerPost, getAnswerId))
  );

  return {
    title,
    question,
    answers,
  };
};
