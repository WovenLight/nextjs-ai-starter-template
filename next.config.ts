import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // Enable standalone output for Docker deployment
    output: "standalone",

    // Exclude packages from server bundling so it’s required at runtime instead.
    // This avoids build errors with Node-specific code that doesn't bundle well
    serverExternalPackages: ["@mastra/*", "@libsql/*"],

    // Disable ESLint during build in production (enable for development)
    eslint: {
        ignoreDuringBuilds: process.env.NODE_ENV === "production",
    },

    // Disable TypeScript checking during build for production deployment
    typescript: {
        ignoreBuildErrors: process.env.NODE_ENV === "production",
    },

    images: {
        remotePatterns: [
            {
                hostname: "lh3.googleusercontent.com",
            },
            {
                hostname: "avatars.githubusercontent.com",
            },
        ],
    },
};

export default nextConfig;
