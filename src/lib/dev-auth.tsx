"use client";

import { useUser as useStackUser } from "@stackframe/stack";

// Development user mock for local development
const DEV_USER = {
  id: 'dev-user-1',
  primaryEmail: 'dev@example.com',
  displayName: 'Development User',
  profileImageUrl: null,
  primaryEmailVerified: true,
  primaryEmailAuthEnabled: true,
  primaryEmailAuthPasswordSet: true,
  passkeyAuthEnabled: false,
  otpAuthEnabled: false,
  oauthProviders: [],
  hasPassword: true,
  clientMetadata: {},
  serverMetadata: {},
  clientReadOnlyMetadata: {},
  serverReadOnlyMetadata: {},
  createdAtMillis: Date.now(),
  signOut: async () => {
    console.log('Dev user sign out called');
  },
  update: async () => {
    console.log('Dev user update called');
    return DEV_USER;
  },
  delete: async () => {
    console.log('Dev user delete called');
  },
  setPassword: async () => {
    console.log('Dev user setPassword called');
  },
  sendForgotPasswordEmail: async () => {
    console.log('Dev user sendForgotPasswordEmail called');
  },
  sendEmailVerificationEmail: async () => {
    console.log('Dev user sendEmailVerificationEmail called');
  },
};

/**
 * Development-friendly useUser hook that bypasses authentication in development
 * when NEXT_PUBLIC_BYPASS_AUTH is set to 'true'
 */
export function useUser(options?: { or?: "redirect" | "throw" }) {
  const stackUser = useStackUser(options);

  // Check if we should bypass auth in development
  const shouldBypass = process.env.NODE_ENV === 'development' &&
                      process.env.NEXT_PUBLIC_BYPASS_AUTH === 'true';

  if (shouldBypass) {
    return DEV_USER;
  }

  return stackUser;
}

/**
 * Hook that always returns the development user, useful for testing
 */
export function useDevUser() {
  return DEV_USER;
}