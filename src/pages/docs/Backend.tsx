import { DocLayout } from "@/components/layout/DocLayout";
import { MarkdownRenderer } from "@/components/markdown/MarkdownRenderer";
import backendMarkdown from "@/data/README_BACKEND.md";
import { useMarkdown } from "@/hooks/use-markdown";

export default function Backend() {
  const content = useMarkdown(backendMarkdown, null);

  return (
    <DocLayout>
      <div className="container p-6">
        <MarkdownRenderer content={content} />
      </div>
    </DocLayout>
  );
}
