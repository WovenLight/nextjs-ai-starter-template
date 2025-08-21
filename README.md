# Next.js AI Starter Template

A modern, production-ready Next.js starter template with AI integration, authentication, and TypeScript. Built for rapid development and easy deployment to Vercel.

![Next.js](https://img.shields.io/badge/Next.js-15+-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8+-blue?logo=typescript)
![Stack Auth](https://img.shields.io/badge/Stack%20Auth-2.7+-green)
![CopilotKit](https://img.shields.io/badge/CopilotKit-1.9+-orange)
![Drizzle](https://img.shields.io/badge/Drizzle-0.44+-brightgreen)

## 🚀 Features

- **⚡ Next.js 15+** - Latest features with App Router and React 19
- **🤖 AI Integration** - CopilotKit for AI chat interfaces + Mastra for agent orchestration
- **🔐 Modern Authentication** - Stack Auth with OAuth, magic links, and development bypass
- **🗄️ Type-Safe Database** - Drizzle ORM with Neon Postgres and auto-scaling
- **🎨 Modern UI** - Tailwind CSS v4 with responsive design and dark mode
- **📱 Developer Experience** - TypeScript strict mode, ESLint, hot reload with Turbopack
- **🚢 Deploy Ready** - Vercel deployment with Docker support and environment management

## 🛠️ Tech Stack

### Core Framework
- **[Next.js 15+](https://nextjs.org/docs)** - React framework with App Router
- **[React 19](https://react.dev/blog/2024/12/05/react-19)** - Latest React with concurrent features
- **[TypeScript](https://www.typescriptlang.org/docs/)** - Type safety and developer experience

### AI & Agents
- **[CopilotKit](https://docs.copilotkit.ai/)** - AI-powered chat interfaces and streaming UI
- **[Mastra](https://mastra.ai/docs)** - Multi-agent orchestration and tool management
- **[OpenAI SDK](https://platform.openai.com/docs/libraries)** - LLM integration with streaming

### Authentication
- **[Stack Auth](https://docs.stack-auth.com/)** - Modern authentication with OAuth providers
- **Development Bypass** - Seamless local development without auth friction

### Database
- **[Neon](https://neon.tech/docs)** - Serverless Postgres with auto-scaling
- **[Drizzle ORM](https://orm.drizzle.team/docs/overview)** - Type-safe database operations and migrations

### Styling & UI
- **[Tailwind CSS v4](https://tailwindcss.com/docs)** - Utility-first CSS framework
- **[Heroicons](https://heroicons.com/)** - Beautiful SVG icons

### Development Tools
- **[pnpm](https://pnpm.io/motivation)** - Fast, disk space efficient package manager
- **[Turbopack](https://turbo.build/pack/docs)** - Ultra-fast bundler for development
- **[ESLint](https://eslint.org/docs/latest/)** - Code linting and formatting

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+** and **pnpm**
- **Neon Database** account ([sign up free](https://neon.tech/))
- **Stack Auth** project ([create project](https://stack-auth.com/))
- **OpenAI API** key ([get key](https://platform.openai.com/api-keys))

### 1. Clone and Install

```bash
# Clone the template
git clone <your-repo-url>
cd nextjs-ai-starter-template

# Install dependencies
pnpm install
```

### 2. Environment Setup

```bash
# Copy environment template
pnpm run setup:env

# Edit .env.local with your credentials
```

Required environment variables:

```env
# Database
DATABASE_URL=postgresql://user:password@hostname:port/database_name

# Stack Auth (from https://stack-auth.com/)
NEXT_PUBLIC_STACK_PROJECT_ID=your_project_id
NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY=your_publishable_key
STACK_SECRET_SERVER_KEY=your_secret_key

# OpenAI
OPENAI_API_KEY=your_openai_api_key

# Development (for local development)
BYPASS_AUTH=true
NEXT_PUBLIC_BYPASS_AUTH=true
```

### 3. Database Setup

```bash
# Generate migration files
pnpm run db:generate

# Run migrations
pnpm run db:migrate

# Optional: Open Drizzle Studio
pnpm run db:studio
```

### 4. Authentication Setup

```bash
# Initialize Stack Auth configuration
pnpm run setup:auth
```

Follow the prompts to configure OAuth providers and authentication settings.

### 5. Start Development

```bash
# Start both UI and agent servers
pnpm dev

# Or start individually
pnpm dev:ui      # UI only
pnpm dev:agent   # Mastra agent only
pnpm dev:debug   # With debug logging
```

Open [http://localhost:3000](http://localhost:3000) to see your application.

## 📚 Documentation Links

### Official Documentation

- **[Next.js Documentation](https://nextjs.org/docs)** - Next.js features and App Router
- **[Stack Auth Docs](https://docs.stack-auth.com/)** - Authentication setup and configuration  
- **[Neon Documentation](https://neon.tech/docs)** - Database setup and best practices
- **[Drizzle ORM Docs](https://orm.drizzle.team/docs/overview)** - Database operations and migrations
- **[CopilotKit Docs](https://docs.copilotkit.ai/)** - AI chat integration and streaming UI
- **[Mastra Documentation](https://mastra.ai/docs)** - Agent orchestration and tools
- **[Tailwind CSS v4](https://tailwindcss.com/docs)** - Styling and responsive design

### Setup Guides

- **[Stack Auth Setup Guide](https://docs.stack-auth.com/getting-started/setup)**
- **[Neon Quickstart](https://neon.tech/docs/get-started-with-neon/signing-up)**
- **[CopilotKit Getting Started](https://docs.copilotkit.ai/getting-started)**
- **[Mastra Quickstart](https://mastra.ai/docs/quickstart)**
- **[Vercel Deployment](https://nextjs.org/learn/basics/deploying-nextjs-app/deploy)**

### Best Practices

- **[Next.js Best Practices](https://nextjs.org/docs/app/building-your-application)**
- **[TypeScript Best Practices](https://typescript-eslint.io/linting/troubleshooting/performance-troubleshooting)**
- **[Drizzle Best Practices](https://orm.drizzle.team/docs/goodies)**
- **[React 19 Migration Guide](https://react.dev/blog/2024/12/05/react-19)**

## 🏗️ Project Structure

```
src/
├── app/                    # App Router pages and layouts
│   ├── api/               # API routes
│   ├── handler/           # Stack Auth pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Home page
├── components/            # Reusable UI components
├── lib/                   # Utility functions and configuration
│   ├── api-utils.ts       # API helpers and middleware
│   ├── db.ts              # Database connection
│   ├── dev-auth.tsx       # Development authentication bypass
│   └── schema.ts          # Database schema and types
├── mastra/               # AI agents and tools
└── stack.ts              # Stack Auth configuration
```

## 🔧 Development Commands

```bash
# Development
pnpm dev                   # Start both UI and agent servers
pnpm dev:ui               # Start UI development only  
pnpm dev:agent            # Start Mastra agent development only
pnpm dev:debug            # Start with debug logging

# Building and testing
pnpm build                # Build for production
pnpm start                # Start production server
pnpm lint                 # Run ESLint
pnpm type-check          # TypeScript type checking

# Database
pnpm db:generate          # Generate migration files
pnpm db:migrate          # Run database migrations
pnpm db:studio           # Open Drizzle Studio

# Setup
pnpm setup               # Full setup: install deps, env, auth
pnpm setup:env           # Copy environment template
pnpm setup:auth          # Initialize Stack Auth
pnpm clean               # Clean and reinstall everything
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy with Vercel**
   - Import your repository on [Vercel](https://vercel.com/new)
   - Add environment variables in Vercel dashboard
   - Deploy automatically on push

3. **Environment Variables in Vercel**
   - Go to Project Settings → Environment Variables
   - Add all variables from `.env.local.example`
   - Remove development variables (`BYPASS_AUTH`, `NEXT_PUBLIC_BYPASS_AUTH`)

### Environment Variables for Production

```env
DATABASE_URL=postgresql://...
NEXT_PUBLIC_STACK_PROJECT_ID=...
NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY=...
STACK_SECRET_SERVER_KEY=...
OPENAI_API_KEY=...
```

### Docker Deployment

```dockerfile
# Built-in Docker support with standalone output
FROM node:18-alpine AS base
# ... (see Next.js Docker docs for full configuration)
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **[Next.js Discord](https://discord.gg/nextjs)**
- **[Stack Auth Discord](https://discord.gg/stack-auth)**
- **[CopilotKit Discord](https://discord.gg/copilotkit)**
- **[GitHub Issues](https://github.com/your-username/nextjs-ai-starter-template/issues)**

---

## 🔗 Related Templates and Resources

- **[T3 Stack](https://create.t3.gg/)** - TypeScript, Next.js, tRPC stack
- **[Next.js Examples](https://github.com/vercel/next.js/tree/canary/examples)** - Official Next.js examples
- **[Awesome Next.js](https://github.com/unicodeveloper/awesome-nextjs)** - Curated Next.js resources

Built with ❤️ using modern tools and best practices.