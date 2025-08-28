import { DocLayout } from "@/components/layout/DocLayout";
import { MarkdownRenderer } from "@/components/markdown/MarkdownRenderer";
import installationMarkdown from "@/data/installation.md";
import { useMarkdown } from "@/hooks/use-markdown";

// This is a fallback content in case the markdown file fails to load
const fallbackContent = `# Installation Guide

Loading content...
`;

export default function Installation() {
  // Use the custom hook to load markdown content
  const content = useMarkdown(installationMarkdown, fallbackContent);

  return (
    <DocLayout markdownContent={content}>
      <div className="container mx-auto px-6 py-8 max-w-4xl">
        <MarkdownRenderer content={content} />
      </div>
    </DocLayout>
  );
}