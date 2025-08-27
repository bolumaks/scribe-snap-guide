import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import 'highlight.js/styles/github-dark.css';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  return (
    <div className={`markdown-content ${className || ''}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight, rehypeRaw]}
        components={{
          img: ({ node, ...props }) => (
            <img 
              {...props} 
              className="max-w-full h-auto rounded-lg border border-border my-4"
              loading="lazy"
            />
          ),
          table: ({ node, ...props }) => (
            <div className="overflow-x-auto my-4">
              <table {...props} className="w-full border-collapse border border-border" />
            </div>
          ),
          th: ({ node, ...props }) => (
            <th 
              {...props} 
              className="border border-border bg-muted px-4 py-2 text-left font-semibold"
            />
          ),
          td: ({ node, ...props }) => (
            <td 
              {...props} 
              className="border border-border px-4 py-2"
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}