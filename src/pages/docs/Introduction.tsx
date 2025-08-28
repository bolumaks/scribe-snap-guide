import { DocLayout } from "@/components/layout/DocLayout";
import { MarkdownRenderer } from "@/components/markdown/MarkdownRenderer";

const introductionContent = `# Introduction

Welcome to the NovelNest documentation! This guide will help you set up and use NovelNest, a comprehensive documentation platform designed for modern applications.

## What is NovelNest?

NovelNest is a powerful documentation platform that helps you organize and categorize content effectively. It includes:

- **Admin Panel** - Comprehensive management interface with powerful features
- **Mobile Application** - Native mobile app built with Flutter 
- **Web Application** - Responsive web interface that works across all devices

## Getting Started

The documentation is organized into several sections:

1. **Admin Panel Setup** - Instructions for setting up and configuring the admin panel
2. **Mobile Application Setup** - Guide for setting up and customizing the mobile app  
3. **Web Application Setup** - Steps to configure and deploy the web application
4. **Support** - How to get help and contact information

## Key Features

### Comprehensive Documentation System
- **Markdown Support** - Write documentation using familiar markdown syntax
- **Code Highlighting** - Beautiful syntax highlighting for code blocks
- **Image Support** - Embed images and media seamlessly
- **Search Functionality** - Find information quickly with global search

### Multi-Platform Support
- **Cross-Platform** - Works on web, mobile, and desktop
- **Responsive Design** - Optimized for all screen sizes
- **Dark Theme** - Professional dark theme optimized for readability

### Developer Experience
- **Easy Setup** - Simple installation and configuration process
- **Flexible** - Customizable to fit your specific needs
- **Modern Stack** - Built with the latest technologies

## System Requirements
### For Admin Panel and Author Dashboard

- **VPS Hosting**: A Virtual Private Server (VPS) is **mandatory** to ensure reliable performance and security. Shared hosting environments are not supported for this web application.

- **Node.js Support**: The server must support **Node.js**, as it is essential for running the application.

- **Memory Requirements**: The server should have at least **3-4 GB of free RAM** to handle the application's processes effectively.

### For Admin Panel and Author Dashboard

- **VPS Hosting**: A Virtual Private Server (VPS) is **mandatory** to ensure reliable performance and security. Shared hosting environments are not supported for this web application.

- **Node.js Support**: The server must support **Node.js**, as it is essential for running the application.

- **Memory Requirements**: The server should have at least **3-4 GB of free RAM** to handle the application's processes effectively.

### For Mobile App

- **React Native Version**: React Native **0.79.4** version
- **Expo SDK Version**: SDK version **53**

> **Note**: A VPS server is only required if you plan to use the **web application**. For hosting the web app, a VPS server is mandatory to ensure proper functionality and performance. However, if you are only using the **mobile app** and the **admin panel**, you can opt for a **shared hosting service** as it is sufficient for these components.

## Next Steps

Ready to get started? Here's what to do next:

1. **Check Prerequisites** - Review the system requirements and prerequisites
2. **Choose Your Platform** - Decide which components you need (Admin Panel, Mobile App, Web App)
3. **Follow Installation Guide** - Use our step-by-step installation instructions
4. **Explore Features** - Learn about all the powerful features available

Thank you for choosing NovelNest!
`;

export default function Introduction() {
  return (
    <DocLayout>
      <div className="container mx-auto px-6 py-8 max-w-4xl">
        <MarkdownRenderer content={introductionContent} />
      </div>
    </DocLayout>
  );
}
