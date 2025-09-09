import { DocLayout } from "@/components/layout/DocLayout";
import { MarkdownRenderer } from "@/components/markdown/MarkdownRenderer";
import { useMarkdown } from "@/hooks/use-markdown";
import contactMarkdown from "@/data/contact.md";

export default function Contact() {
  const content = useMarkdown(contactMarkdown, null);
  return (
    <DocLayout>
      <div className="container p-6">
        <MarkdownRenderer content={content} />
      </div>
    </DocLayout>
  );
}
