"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useUser } from "@/lib/dev-auth";

import ExampleChat from "@/components/example-chat";

export default function HomePage() {
    const router = useRouter();
    const user = useUser();

    useEffect(() => {
        // Redirect to dashboard if user is logged in
        if (user) {
            router.push("/dashboard");
        }
    }, [user, router]);

    if (user) {
        // Show loading while redirecting
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-400">
                        Redirecting to dashboard...
                    </p>
                </div>
            </div>
        );
    }

    // Show welcome page for non-logged in users
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Hero Section */}
                    <div className="mb-16">
                        <div className="flex items-center justify-center mb-8">
                            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-2xl">
                                    AI
                                </span>
                            </div>
                        </div>
                        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            Next.js AI Starter
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                            A modern full-stack application template with AI
                            integration, authentication, and best practices for
                            rapid development and deployment.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                            <button
                                onClick={() => router.push("/handler/sign-up")}
                                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition-colors duration-200"
                            >
                                Get Started - Sign Up
                            </button>
                            <button
                                onClick={() => router.push("/handler/sign-in")}
                                className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-xl shadow-lg border border-gray-200 transition-colors duration-200"
                            >
                                Sign In
                            </button>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                <svg
                                    className="w-6 h-6 text-blue-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                AI Integration
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Built-in CopilotKit and Mastra integration for
                                AI-powered features and agent orchestration.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                <svg
                                    className="w-6 h-6 text-green-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                Modern Auth
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Stack Auth integration with OAuth, magic links,
                                and development bypass for seamless
                                authentication.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                <svg
                                    className="w-6 h-6 text-purple-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                Type-Safe Database
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Drizzle ORM with Neon Postgres for scalable,
                                type-safe database operations with migrations.
                            </p>
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                            Modern Tech Stack
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                            <div className="text-center p-4">
                                <div className="text-2xl mb-2">⚡</div>
                                <div className="font-semibold text-gray-900 dark:text-white">
                                    Next.js 15+
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    App Router
                                </div>
                            </div>
                            <div className="text-center p-4">
                                <div className="text-2xl mb-2">🤖</div>
                                <div className="font-semibold text-gray-900 dark:text-white">
                                    AI Ready
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    CopilotKit + Mastra
                                </div>
                            </div>
                            <div className="text-center p-4">
                                <div className="text-2xl mb-2">🔐</div>
                                <div className="font-semibold text-gray-900 dark:text-white">
                                    Stack Auth
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    Modern Authentication
                                </div>
                            </div>
                            <div className="text-center p-4">
                                <div className="text-2xl mb-2">🗄️</div>
                                <div className="font-semibold text-gray-900 dark:text-white">
                                    Neon + Drizzle
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    Serverless Postgres
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => router.push("/handler/sign-up")}
                            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition-colors duration-200"
                        >
                            Start Building
                        </button>
                    </div>

                    {/* AI Ready Copilot + Mastra Section */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mt-16">
                        <div className="text-3xl mb-2">🤖</div>
                        <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                            AI Ready
                        </div>
                        <div className="text-1xl text-gray-600 dark:text-gray-400 mb-6">
                            CopilotKit + Mastra
                        </div>
                        <div className="mb-6">
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                                Experience the power of AI integration with
                                CopilotKit and Mastra via AG-UI protocol.
                                Provide the OpenAI API key to enable the chat.
                            </p>
                            <div className="h-120 border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden">
                                <ExampleChat />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                                <div className="flex items-center justify-center mb-4">
                                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                                        <svg
                                            className="w-6 h-6 text-blue-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                    CopilotKit
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Build AI-powered chat with React components,
                                    hooks, and infrastructure for seamless user
                                    experiences.
                                </p>
                            </div>

                            <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                                <div className="flex items-center justify-center mb-4">
                                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                                        <svg
                                            className="w-6 h-6 text-purple-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                    Mastra
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Build AI agents, tools and workflows with
                                    state and memory management and integration
                                    capabilities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
