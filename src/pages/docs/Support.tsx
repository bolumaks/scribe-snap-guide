import { DocLayout } from "@/components/layout/DocLayout";
import { MarkdownRenderer } from "@/components/markdown/MarkdownRenderer";
import { useMarkdown } from "@/hooks/use-markdown";
import supportMarkdown from "@/data/support.md";

export default function Support() {
  const content = useMarkdown(supportMarkdown, null);
  return (
    <DocLayout>
      <div className="container p-6">
        <MarkdownRenderer content={content} />
      </div>
    </DocLayout>
  );
}
