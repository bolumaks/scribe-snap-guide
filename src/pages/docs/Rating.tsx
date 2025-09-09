import { DocLayout } from "@/components/layout/DocLayout";
import { MarkdownRenderer } from "@/components/markdown/MarkdownRenderer";
import { useMarkdown } from "@/hooks/use-markdown";
import ratingMarkdown from "@/data/rating.md";

export default function Rating() {
  const content = useMarkdown(ratingMarkdown, null);
  return (
    <DocLayout>
      <div className="container p-6">
        <MarkdownRenderer content={content} />
      </div>
    </DocLayout>
  );
}
