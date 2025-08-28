import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import "highlight.js/styles/github.css";

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
          h1({ children, ...props }) {
            const text = String(children);
            const id = `heading-0-${text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`;
            return <h1 id={id} {...props}>{children}</h1>;
          },
          h2({ children, ...props }) {
            const text = String(children);
            const id = `heading-1-${text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`;
            return <h2 id={id} {...props}>{children}</h2>;
          },
          h3({ children, ...props }) {
            const text = String(children);
            const id = `heading-2-${text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`;
            return <h3 id={id} {...props}>{children}</h3>;
          },
          h4({ children, ...props }) {
            const text = String(children);
            const id = `heading-3-${text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`;
            return <h4 id={id} {...props}>{children}</h4>;
          },
          h5({ children, ...props }) {
            const text = String(children);
            const id = `heading-4-${text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`;
            return <h5 id={id} {...props}>{children}</h5>;
          },
          h6({ children, ...props }) {
            const text = String(children);
            const id = `heading-5-${text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`;
            return <h6 id={id} {...props}>{children}</h6>;
          },
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