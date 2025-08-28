import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { 
  Book, 
  Rocket, 
  Settings, 
  Smartphone, 
  Globe, 
  Sparkles, 
  FileText,
  ChevronRight,
  Search,
  ChevronDown
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useMarkdownNavigation } from "@/hooks/use-markdown-navigation";

const navigationItems = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", url: "/docs/introduction", icon: Book },
      { title: "Prerequisites", url: "/docs/prerequisites", icon: Settings },
      { title: "Installation", url: "/docs/installation", icon: Rocket },
    ]
  },
  {
    title: "Applications",
    items: [
      { title: "Admin Panel", url: "/docs/admin-panel", icon: Settings },
      { title: "Mobile App", url: "/docs/mobile-app", icon: Smartphone },
      { title: "Web Application", url: "/docs/web-app", icon: Globe },
    ]
  },
  {
    title: "Advanced",
    items: [
      { title: "Features", url: "/docs/features", icon: Sparkles },
      { title: "ChangeLog", url: "/docs/changelog", icon: FileText },
    ]
  }
];

interface DocSidebarProps {
  markdownContent?: string;
}

export function DocSidebar({ markdownContent }: DocSidebarProps) {
  const { state } = useSidebar();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [openSections, setOpenSections] = useState<string[]>(['main-nav', 'page-nav']);

  const { headings, scrollToHeading } = useMarkdownNavigation(markdownContent || "");
  
  const isActive = (path: string) => location.pathname === path;
  const collapsed = state === "collapsed";

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  return (
    <Sidebar className={cn(
      "border-r border-sidebar-border",
      collapsed ? "w-14" : "w-64"
    )}>
      <SidebarContent className="bg-sidebar">
        {/* Search */}
        {!collapsed && (
          <div className="p-4 border-b border-sidebar-border">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search docs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 bg-sidebar-accent border-sidebar-border"
              />
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex-1 px-3 space-y-1">
          {/* Main Navigation */}
          <Collapsible
            open={openSections.includes('main-nav')}
            onOpenChange={() => toggleSection('main-nav')}
          >
            <CollapsibleTrigger className="flex items-center justify-between w-full p-2 hover:bg-sidebar-accent rounded-md">
              <span className="text-sidebar-foreground/70 text-xs uppercase tracking-wide font-medium">
                Navigation
              </span>
              <ChevronDown className={cn(
                "h-3 w-3 transition-transform",
                openSections.includes('main-nav') && "rotate-180"
              )} />
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-1 mt-1">
              {navigationItems.map((section) => (
                <SidebarGroup key={section.title} className="py-1">
                  {!collapsed && (
                    <SidebarGroupLabel className="text-sidebar-foreground/60 text-xs font-medium mb-1 px-2">
                      {section.title}
                    </SidebarGroupLabel>
                  )}
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {section.items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton asChild>
                            <NavLink
                              to={item.url}
                              className={({ isActive: navIsActive }) =>
                                cn(
                                  "flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 text-sm",
                                  "hover:bg-sidebar-accent text-sidebar-foreground",
                                  navIsActive && "bg-sidebar-primary text-sidebar-primary-foreground font-medium"
                                )
                              }
                            >
                              <item.icon className="h-4 w-4 shrink-0" />
                              {!collapsed && (
                                <>
                                  <span className="truncate">{item.title}</span>
                                  {isActive(item.url) && (
                                    <ChevronRight className="h-3 w-3 ml-auto" />
                                  )}
                                </>
                              )}
                            </NavLink>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              ))}
            </CollapsibleContent>
          </Collapsible>

          {/* Page Navigation */}
          {headings.length > 0 && !collapsed && (
            <Collapsible
              open={openSections.includes('page-nav')}
              onOpenChange={() => toggleSection('page-nav')}
            >
              <CollapsibleTrigger className="flex items-center justify-between w-full p-2 hover:bg-sidebar-accent rounded-md">
                <span className="text-sidebar-foreground/70 text-xs uppercase tracking-wide font-medium">
                  On This Page
                </span>
                <ChevronDown className={cn(
                  "h-3 w-3 transition-transform",
                  openSections.includes('page-nav') && "rotate-180"
                )} />
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-1 mt-1">
                <div className="space-y-1">
                  {headings.map((heading) => (
                    <button
                      key={heading.id}
                      onClick={() => scrollToHeading(heading.id)}
                      className={cn(
                        "flex items-start w-full px-3 py-1.5 text-sm text-left rounded-md transition-colors",
                        "hover:bg-sidebar-accent text-sidebar-foreground/80 hover:text-sidebar-foreground",
                        heading.level === 1 && "font-medium",
                        heading.level === 2 && "pl-5",
                        heading.level === 3 && "pl-7 text-xs",
                        heading.level > 3 && "pl-9 text-xs"
                      )}
                    >
                      <span className="truncate">{heading.text}</span>
                    </button>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          )}
        </div>
      </SidebarContent>
    </Sidebar>
  );
}