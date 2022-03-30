export const createQuestionUrlById = (questionId: string) =>
  `https://stackoverflow.com/questions/${questionId}`;

export const createFetchCommentUrlByPostId = (postId: string) =>
  `https://stackoverflow.com/posts/${postId}/comments`;
