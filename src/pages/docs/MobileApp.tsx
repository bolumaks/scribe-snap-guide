import { DocLayout } from "@/components/layout/DocLayout";
import { MarkdownRenderer } from "@/components/markdown/MarkdownRenderer";
import mobileAppMarkdown from "@/data/mobile-app.md";
import { useMarkdown } from "@/hooks/use-markdown";

export default function MobileApp() {
  const content = useMarkdown(mobileAppMarkdown, null);

  return (
    <DocLayout>
      <div className="container p-6">
        <MarkdownRenderer content={content} />
      </div>
    </DocLayout>
  );
}
