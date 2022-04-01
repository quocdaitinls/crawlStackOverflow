import {Cheerio, CheerioAPI, Element} from "cheerio";

export const getTags = <E extends Element>(
  doc: CheerioAPI,
  questionPost: Cheerio<E>
) => {
  let result: string[] = [];
  const tagNodes = questionPost.find(".post-tag");

  tagNodes.each((index, tagNode) => {
    result[index] = doc(tagNode).text();
  });

  return result;
};
