import { useState, useEffect } from 'react';
import { loadMarkdownContent } from '@/lib/markdown-loader';

/**
 * Custom hook to load markdown content from imported markdown files
 * @param markdownModule The imported markdown module
 * @param fallback Optional fallback content if loading fails
 * @returns The loaded markdown content
 */
export function useMarkdown(markdownModule: string, fallback: string = '') {
  const [content, setContent] = useState<string>(fallback);
  
  useEffect(() => {
    setContent(loadMarkdownContent(markdownModule, fallback));
  }, [markdownModule, fallback]);
  
  return content;
}