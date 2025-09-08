import { ReactNode } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DocSidebar } from "./DocSidebar";
import { DocHeader } from "./DocHeader";

interface DocLayoutProps {
  children: ReactNode;
}

export function DocLayout({ children }: DocLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-doc-bg">
        <DocSidebar />
        <div className="flex-1 flex flex-col">
          <DocHeader />
          <main className="flex-1 bg-doc-content">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}