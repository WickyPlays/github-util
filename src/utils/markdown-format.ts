import { marked } from 'marked';


export const markdownConfig = {
  headerIds: true,
  gfm: true,
  breaks: true,
};

export const parseMarkdown = (content: string): string => {
  marked.setOptions(markdownConfig);
  return marked.parse(content);
};