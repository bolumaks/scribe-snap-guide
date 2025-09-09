import { DocLayout } from "@/components/layout/DocLayout";
import { MarkdownRenderer } from "@/components/markdown/MarkdownRenderer";
import { useMarkdown } from "@/hooks/use-markdown";
import supportMarkdown from "@/data/faqs.md";

export default function FAQs() {
  const content = useMarkdown(supportMarkdown, null);
  return (
    <DocLayout>
      <div className="container p-6">
        <MarkdownRenderer content={content} />
      </div>
    </DocLayout>
  );
}
