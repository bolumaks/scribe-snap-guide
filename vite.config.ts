import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { Plugin } from 'vite';

// Custom plugin to handle markdown imports
function markdownImport(): Plugin {
  return {
    name: 'vite-plugin-markdown-import',
    transform(code, id) {
      if (id.endsWith('.md')) {
        // Return the markdown content as a string
        const content = `export default ${JSON.stringify(code)}`;
        return { code: content };
      }
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    markdownImport(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
