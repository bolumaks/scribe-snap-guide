import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LogoIcon } from "@/components/icons/LogoIcon";
import {
  Settings,
  Smartphone,
  Globe,
  Sparkles,
  FileText,
  ArrowRight,
  Search,
  Github,
} from "lucide-react";

const features = [
  {
    title: "Admin Panel",
    description:
      "Comprehensive admin panel with powerful features for managing your documentation platform.",
    icon: Settings,
    link: "/docs/admin-panel",
    color: "text-primary",
  },
  {
    title: "Mobile Application",
    description:
      "Build and customize your mobile application with Flutter to reach users on all devices.",
    icon: Smartphone,
    link: "/docs/mobile-app",
    color: "text-primary",
  },
  {
    title: "Web Application",
    description:
      "Deploy a responsive web application that works seamlessly across browsers and devices.",
    icon: Globe,
    link: "/docs/web-app",
    color: "text-primary",
  },
  {
    title: "Features",
    description:
      "Explore the powerful and flexible features that make NovelNest a complete solution for your needs.",
    icon: Sparkles,
    link: "/docs/features",
    color: "text-primary",
  },
  {
    title: "ChangeLog",
    description:
      "Track all updates, improvements, and changes across the NovelNest platform.",
    icon: FileText,
    link: "/docs/changelog",
    color: "text-primary",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-sidebar border-b border-sidebar-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="./logo.png" alt="NovelNest" className="h-8 w-auto" />
            </div>
            <div className="flex items-center gap-4">
              <Link to="/docs/introduction">
                <Button
                  variant="ghost"
                  className="text-sidebar-foreground hover:bg-sidebar-accent"
                >
                  Documentation
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="sm"
                className="text-sidebar-foreground hover:bg-sidebar-accent"
              >
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-primary py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <img
              src="./icon.png"
              className="h-16 w-16 mx-auto rounded-md mb-8"
            />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              NovelNest Documentation
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Documentation for NovelNest Admin Panel, Mobile App,
              <br />
              and Web Application
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/docs/introduction">
                <Button variant="hero" size="lg" className="min-w-[160px]">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="min-w-[160px] border-white/30 text-white hover:bg-white/10"
              >
                <Search className="mr-2 h-4 w-4" />
                Search Docs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6 p-4 bg-primary/10 rounded-full">
                      <feature.icon className={`h-8 w-8 ${feature.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-card-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <Link to={feature.link}>
                      <Button
                        variant="outline"
                        className="group-hover:border-primary group-hover:text-primary transition-all"
                      >
                        {feature.title === "Admin Panel"
                          ? "Configure Admin Panel"
                          : feature.title === "Mobile Application"
                          ? "Setup Mobile App"
                          : "Configure Web App"}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-card-foreground">
              Need Help?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Our support team is ready to assist you with any questions or
              issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="min-w-[140px]">
                Support
              </Button>
              <Button variant="outline" size="lg" className="min-w-[140px]">
                FAQs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sidebar border-t border-sidebar-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sidebar-foreground/70">
            Copyright © 2025 NovelNest. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
