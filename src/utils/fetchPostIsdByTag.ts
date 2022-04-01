import {createFetchQuestionsHtmlUrlByTag} from "./createUrl";
import {fetchHTMLString} from "./fetchHtml";
import cheerio from "cheerio";
import {convertToList} from "./findNode";

const QUESTIONS_PER_PAGE = 15;

const fetchPostsIdByUrl = async (url: string) => {
  const htmlString = await fetchHTMLString(url);
  const doc = cheerio.load(htmlString);

  const questionsNode = convertToList(doc, doc(".s-post-summary"));
  const result = questionsNode.map((questionNode) =>
    questionNode.attr("data-post-id")
  ) as string[];

  return result;
};

export const fetchPostsIdByTag = async (tag: string) => {
  const url = createFetchQuestionsHtmlUrlByTag(tag, 1);
  return fetchPostsIdByUrl(url);
};

// export const fetchPostsIdByTag = async (
//   tag: string,
//   count: number
// ): Promise<string[]> => {
//   const pages = Math.ceil(count / QUESTIONS_PER_PAGE);
//   const pageArr = Array.from({length: pages}, (_, i) => i + 1);

//   const urls = pageArr.map((number) =>
//     createFetchQuestionsHtmlUrlByTag(tag, number)
//   );

//   const x = await Promise.all(urls.map((url) => fetchPostsIdByUrl(url)));
//   return Array.prototype.concat.apply([], x).slice(0, count);
// };
