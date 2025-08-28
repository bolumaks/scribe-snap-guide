import { Link } from "react-router-dom";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Github, Search } from "lucide-react";
import { LogoIcon } from "@/components/icons/LogoIcon";

export function DocHeader() {
  return (
    <header className="h-14 flex items-center justify-between px-4 bg-sidebar border-b border-sidebar-border">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="text-sidebar-foreground hover:bg-sidebar-accent" />
        <Link to="/" className="flex items-center gap-2">
          <LogoIcon className="h-6 w-6" />
          <span className="font-semibold text-sidebar-foreground">
            NovelNest
          </span>
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          className="text-sidebar-foreground hover:bg-sidebar-accent"
        >
          <Search className="h-4 w-4" />
          <span className="hidden md:inline ml-2">Search</span>
          <kbd className="hidden md:inline-flex ml-2 pointer-events-none h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="text-sidebar-foreground hover:bg-sidebar-accent"
        >
          <Github className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
}
