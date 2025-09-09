import { useState } from "react";
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
  Contact,
  Contact2,
  MessageCircleQuestion,
  StarHalf,
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
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const navigationItems = [
  {
    title: "Applications",
    items: [
      { title: "Admin Panel", url: "/docs/admin-panel", icon: Settings },
      { title: "Mobile App", url: "/docs/mobile-app", icon: Smartphone },
      { title: "Backend Application", url: "/docs/backend", icon: Globe },
    ],
  },
  {
    title: "Advanced",
    items: [
      { title: "Features", url: "/docs/features", icon: Sparkles },
      { title: "ChangeLog", url: "/docs/changelog", icon: FileText },
    ],
  },
  {
    title: "Support",

    items: [
      { title: "Support", url: "/docs/support", icon: Contact },
      { title: "FAQs", url: "/docs/faqs", icon: MessageCircleQuestion },
      { title: "Rating", url: "/docs/rating", icon: StarHalf },
      { title: "Contact", url: "/docs/contact", icon: Contact2 },
    ],
  },
];

export function DocSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  const isActive = (path: string) => location.pathname === path;
  const collapsed = state === "collapsed";

  return (
    <Sidebar
      className={cn(
        "border-r border-sidebar-border",
        collapsed ? "w-14" : "w-64"
      )}
    >
      <SidebarContent className="bg-sidebar">
        {/* Search */}
        {/* {!collapsed && (
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
        )} */}

        {/* Navigation */}
        <div className="flex-1 px-3">
          {navigationItems.map((section) => (
            <SidebarGroup key={section.title} className="py-2">
              {!collapsed && (
                <SidebarGroupLabel className="text-black/70 text-xs uppercase tracking-wide mb-2">
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
                              "flex items-center text-black gap-3 px-3 py-2 rounded-md transition-all duration-200",
                              "hover:bg-[#e0e0e0]",

                              navIsActive && "bg-[#e0e0e0] font-medium"
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
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
