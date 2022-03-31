export const createFetchQuestionHtmlUrlById = (questionId: string) =>
  `https://stackoverflow.com/questions/${questionId}`;

export const createFetchCommentUrlByPostId = (postId: string) =>
  `https://stackoverflow.com/posts/${postId}/comments`;

export const createFetchQuestionsHtmlUrlByTag = (
  tag: string,
  pageNumber: number
) =>
  `https://stackoverflow.com/questions/tagged/${tag}?tab=votes&page=${pageNumber}`;

export const createRandomProxyUrl = (listIp: string[], listPort: string[]) => {
  const random_number = Math.floor(Math.random() * 10);

  return `http://${listIp[random_number]}:${listPort[random_number]}`;
};
