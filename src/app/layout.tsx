import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { inter } from "./fonts";
import { CopilotKit } from "@copilotkit/react-core";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackServerApp } from "../stack";
import "./globals.css";
import "@copilotkit/react-ui/styles.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js AI Starter Template",
  description: "A modern full-stack application using Next.js, Mastra, CopilotKit, Stack Auth, and Neon Postgres",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased font-sans min-h-screen bg-background text-foreground">
        <StackProvider app={stackServerApp}>
          <StackTheme>
            <CopilotKit runtimeUrl="/api/copilotkit" agent="assistantAgent">
              {children}
            </CopilotKit>
          </StackTheme>
        </StackProvider>
      </body>
    </html>
  );
}