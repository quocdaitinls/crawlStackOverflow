export interface StackOverflowComment {
  id: string;
  value: string;
  date?: Date;
}

export interface StackOverflowPost {
  id: string;
  content: string;
  comments?: StackOverflowComment[];
}

export interface Question extends StackOverflowPost {
  tags: string[];
}

export type StackOverflowQuestion = {
  title: string;
  question: Question;
  answers: StackOverflowPost[];
};
