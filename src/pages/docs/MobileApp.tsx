import { DocLayout } from "@/components/layout/DocLayout";
import { MarkdownRenderer } from "@/components/markdown/MarkdownRenderer";
import mobileAppMarkdown from "@/data/mobile-app.md";
import { useMarkdown } from "@/hooks/use-markdown";

// This is a fallback content in case the markdown file fails to load
const fallbackContent = `# Prerequisites

Before installing NovelNest, make sure your system meets the following requirements for each component.

## For Web Application

### VPS Hosting Requirements

A **Virtual Private Server (VPS)** is mandatory to ensure reliable performance and security. Shared hosting environments are not supported for the web application.

### Server Requirements

1. **VPS Hosting**: A Virtual Private Server (VPS) is **mandatory** to ensure reliable performance and security. Shared hosting environments are not supported for this web application.

2. **Node.js Support**: The server must support **Node.js**, as it is essential for running the application.

3. **Memory Requirements**: The server should have at least **3-4 GB of free RAM** to handle the application's processes effectively.

4. **SSH Root Access**: The server must provide **SSH root access** to execute Node.js commands and manage the application.

## For Admin Panel

### PHP Requirements

**PHP Version**: NovelNest Admin panel is built using **Laravel Framework 10.0** so you need PHP version **minimum 8.1.0 or higher version** installed on your server.

### Database Requirements

- **MySQL**: Version 5.7+ or MySQL 8.0+
- **PostgreSQL**: Version 10.0+ (alternative to MySQL)

### Web Server Requirements

- **Apache**: Version 2.4+ with mod_rewrite enabled
- **Nginx**: Version 1.18+ (alternative to Apache)

### PHP Extensions

The following PHP extensions must be installed:

- BCMath PHP Extension
- Ctype PHP Extension  
- Fileinfo PHP Extension
- JSON PHP Extension
- Mbstring PHP Extension
- OpenSSL PHP Extension
- PDO PHP Extension
- Tokenizer PHP Extension
- XML PHP Extension
- GD PHP Extension
- cURL PHP Extension

## For Mobile App

### Development Environment

1. **Flutter Version**: Flutter stable channel **3.24.2** SDK version

2. **Java Version**: JDK version **22**

### Platform-Specific Requirements

#### For Android Development

- **Android Studio**: Latest stable version
- **Android SDK**: API level 21 (Android 5.0) or higher
- **Android SDK Build-Tools**: Latest version
- **Android Emulator** or physical Android device for testing

#### For iOS Development (macOS only)

- **Xcode**: Version 12.0 or higher
- **iOS Simulator** or physical iOS device for testing
- **CocoaPods**: Latest stable version

## Network Requirements

### Domain & SSL

- **Domain Name**: A registered domain name
- **SSL Certificate**: Valid SSL certificate for HTTPS (recommended: Let's Encrypt)

### Firewall & Ports

- **Port 80**: For HTTP traffic (redirects to HTTPS)
- **Port 443**: For HTTPS traffic  
- **Port 22**: For SSH access
- **Custom Ports**: As configured for your application

## Development Tools

### Required Software

- **Git**: Version control system
- **Code Editor**: VS Code, PhpStorm, or similar
- **Terminal/Command Line**: Access to command line interface

### Recommended Tools

- **Database Management**: phpMyAdmin, Adminer, or database GUI client
- **API Testing**: Postman, Insomnia, or similar
- **File Transfer**: SFTP client (FileZilla, WinSCP, etc.)

## Important Notes

> **VPS Requirement**: A VPS server is only required if you plan to use the **web application**. For hosting the web app, a VPS server is mandatory to ensure proper functionality and performance. 

> **Shared Hosting**: If you are only using the **mobile app** and the **admin panel**, you can opt for a **shared hosting service** as it is sufficient for these components.

## Verification Checklist

Before proceeding with installation, verify that you have:

- [ ] VPS server with root access (for web application)
- [ ] PHP 8.1+ installed (for admin panel)
- [ ] Database server configured
- [ ] Node.js environment ready (for web application)  
- [ ] Flutter SDK installed (for mobile app)
- [ ] Java JDK 22 installed (for mobile app)
- [ ] Domain name and SSL certificate
- [ ] Development tools installed

## Next Steps

Once you've verified all prerequisites are met, proceed to the [Installation Guide](/docs/installation) to begin setting up NovelNest.

If you encounter any issues with the prerequisites, check our [Support](/docs/support) section for troubleshooting help.
`;

export default function MobileApp() {
  // Use the custom hook to load markdown content
  const content = useMarkdown(mobileAppMarkdown, fallbackContent);

  return (
    <DocLayout>
      <div className="container p-6">
        <MarkdownRenderer content={content} />
      </div>
    </DocLayout>
  );
}
