import {Cheerio, Element} from "cheerio";
import {convert} from "html-to-text";

export const formatContent = (input: string) => {
  return input.replace(/(\r\n|\n|\r)+/gm, " ");
};

export const getContent = <E extends Element>(body: Cheerio<E>) =>
  formatContent(convert(body.toString()));
