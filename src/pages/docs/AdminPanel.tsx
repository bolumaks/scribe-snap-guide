import { DocLayout } from "@/components/layout/DocLayout";
import { MarkdownRenderer } from "@/components/markdown/MarkdownRenderer";
import adminPanelMarkdown from "@/data/README_FRONTEND.md";
import { useMarkdown } from "@/hooks/use-markdown";

export default function AdminPanel() {
  const content = useMarkdown(adminPanelMarkdown, null);

  return (
    <DocLayout>
      <div className="container p-6">
        <MarkdownRenderer content={content} />
      </div>
    </DocLayout>
  );
}
