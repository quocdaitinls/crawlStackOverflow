export const createFetchQuestionHtmlUrlById = (questionId: string) =>
  `https://stackoverflow.com/questions/${questionId}`;

export const createFetchCommentUrlByPostId = (postId: string) =>
  `https://stackoverflow.com/posts/${postId}/comments`;

export const createFetchQuestionsHtmlUrlByTag = (
  tag: string,
  pageNumber: number
) =>
  `https://stackoverflow.com/questions/tagged/${tag}?tab=votes&page=${pageNumber}`;
