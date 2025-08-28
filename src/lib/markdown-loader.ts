/**
 * Utility function to load markdown content from imported markdown files
 */
export function loadMarkdownContent(markdownModule: string, fallback: string = ''): string {
  try {
    return markdownModule || fallback;
  } catch (error) {
    console.error('Error loading markdown content:', error);
    return fallback;
  }
}