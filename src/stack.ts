import "server-only";

import { StackServerApp } from "@stackframe/stack";

// Validate required environment variables according to Stack Auth documentation
const requiredEnvVars = {
  NEXT_PUBLIC_STACK_PROJECT_ID: process.env.NEXT_PUBLIC_STACK_PROJECT_ID,
  NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY: process.env.NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY,
  STACK_SECRET_SERVER_KEY: process.env.STACK_SECRET_SERVER_KEY,
};

const missingVars = Object.entries(requiredEnvVars)
  .filter(([key, value]) => !value)
  .map(([key]) => key);

if (missingVars.length > 0) {
  throw new Error(
    `Missing required Stack Auth environment variables: ${missingVars.join(', ')}`
  );
}

export const stackServerApp = new StackServerApp({
  tokenStore: "nextjs-cookie",
  projectId: process.env.NEXT_PUBLIC_STACK_PROJECT_ID!,
  publishableClientKey: process.env.NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY!,
  secretServerKey: process.env.STACK_SECRET_SERVER_KEY!,
  baseUrl: process.env.NEXT_PUBLIC_STACK_API_URL || "https://api.stack-auth.com",
  oauthScopesOnSignIn: {
    google: ['https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile']
  },
  urls: {
    home: "/",
    signIn: "/handler/sign-in",
    afterSignIn: "/dashboard",
    signUp: "/handler/sign-up",
    afterSignUp: "/dashboard",
    afterSignOut: "/",
    emailVerification: "/handler/email-verification",
    passwordReset: "/handler/password-reset",
    forgotPassword: "/handler/forgot-password",
    accountSettings: "/handler/account-settings",
    handler: "/handler",
  },
});