import { useState, useEffect } from 'react';

export interface MarkdownHeading {
  id: string;
  text: string;
  level: number;
}

export function useMarkdownNavigation(markdownContent: string) {
  const [headings, setHeadings] = useState<MarkdownHeading[]>([]);

  useEffect(() => {
    if (!markdownContent) return;

    // Extract headings from markdown content
    const headingRegex = /^(#{1,6})\s+(.+)$/gm;
    const matches = [...markdownContent.matchAll(headingRegex)];
    
    const extractedHeadings: MarkdownHeading[] = matches.map((match, index) => {
      const level = match[1].length;
      const text = match[2].trim();
      const id = `heading-${index}-${text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`;
      
      return { id, text, level };
    });

    setHeadings(extractedHeadings);
  }, [markdownContent]);

  const scrollToHeading = (headingId: string) => {
    const element = document.getElementById(headingId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return { headings, scrollToHeading };
}