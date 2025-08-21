import { NextRequest } from 'next/server';
import { z, ZodError } from 'zod';
import { stackServerApp } from '@/stack';

// Standard API response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  errors?: Record<string, string[]>;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Error response helper
export function createErrorResponse(
  error: string | ZodError | Error,
  status: number = 400
): Response {
  let errorData: ApiResponse;

  if (error instanceof ZodError) {
    const errors: Record<string, string[]> = {};
    error.errors.forEach((err) => {
      const path = err.path.join('.');
      if (!errors[path]) errors[path] = [];
      errors[path].push(err.message);
    });

    errorData = {
      success: false,
      error: 'Validation failed',
      errors,
    };
  } else if (error instanceof Error) {
    errorData = {
      success: false,
      error: error.message,
    };
  } else {
    errorData = {
      success: false,
      error: error,
    };
  }

  return Response.json(errorData, { status });
}

// Success response helper
export function createSuccessResponse<T>(
  data: T,
  status: number = 200,
  pagination?: ApiResponse['pagination']
): Response {
  const response: ApiResponse<T> = {
    success: true,
    data,
  };

  if (pagination) {
    response.pagination = pagination;
  }

  return Response.json(response, { status });
}

// Parse and validate request body
export async function parseRequestBody<T>(
  request: NextRequest,
  schema: z.ZodSchema<T>
): Promise<T> {
  try {
    const body = await request.json();
    return schema.parse(body);
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error('Invalid JSON in request body');
    }
    throw error;
  }
}

// Parse and validate query parameters
export function parseQueryParams<T>(
  request: NextRequest,
  schema: z.ZodSchema<T>
): T {
  const url = new URL(request.url);
  const params: Record<string, any> = {};

  for (const [key, value] of url.searchParams.entries()) {
    params[key] = value;
  }

  return schema.parse(params);
}

// Extract ID from URL path
export function extractIdFromPath(pathname: string): number {
  const segments = pathname.split('/');
  const idStr = segments[segments.length - 1];
  const id = parseInt(idStr, 10);

  if (isNaN(id) || id <= 0) {
    throw new Error('Invalid ID parameter');
  }

  return id;
}

// Authentication middleware
export async function authenticateRequest(request: NextRequest) {
  // Development bypass - use real user if available, fallback to dev user for API testing
  if (process.env.NODE_ENV === 'development' && process.env.BYPASS_AUTH === 'true') {
    try {
      // Try to get real user first
      const realUser = await stackServerApp.getUser();
      if (realUser) {
        return realUser;
      }
    } catch (error) {
      // Fallback to dev user for API testing
    }

    return {
      id: 'dev-user-1',
      primaryEmail: 'dev@example.com',
      displayName: 'Development User',
      profileImageUrl: null,
    };
  }

  try {
    const user = await stackServerApp.getUser();
    if (!user) {
      throw new Error('Authentication required');
    }
    return user;
  } catch (error) {
    throw new Error('Invalid or expired authentication');
  }
}

// Optional authentication (returns null if not authenticated)
export async function getOptionalUser(request: NextRequest) {
  // Development bypass - use real user if available, fallback to dev user for API testing
  if (process.env.NODE_ENV === 'development' && process.env.BYPASS_AUTH === 'true') {
    try {
      // Try to get real user first
      const realUser = await stackServerApp.getUser();
      if (realUser) {
        return realUser;
      }
    } catch (error) {
      // Fallback to dev user for API testing
    }

    return {
      id: 'dev-user-1',
      primaryEmail: 'dev@example.com',
      displayName: 'Development User',
      profileImageUrl: null,
    };
  }

  try {
    return await stackServerApp.getUser();
  } catch {
    return null;
  }
}

// Handle database errors
export function handleDatabaseError(error: any): Response {
  console.error('Database error:', error);

  // Check for common Postgres errors
  if (error.code) {
    switch (error.code) {
      case '23505': // Unique violation
        return createErrorResponse('A record with this data already exists', 409);
      case '23503': // Foreign key violation
        return createErrorResponse('Referenced record does not exist', 400);
      case '23502': // Not null violation
        return createErrorResponse('Required field is missing', 400);
      case '23514': // Check violation
        return createErrorResponse('Data violates constraints', 400);
      default:
        return createErrorResponse('Database operation failed', 500);
    }
  }

  return createErrorResponse('Internal server error', 500);
}

// Calculate pagination info
export function calculatePagination(
  total: number,
  page: number,
  limit: number
): ApiResponse['pagination'] {
  const totalPages = Math.ceil(total / limit);

  return {
    page,
    limit,
    total,
    totalPages,
  };
}

// Build WHERE conditions for search
export function buildSearchConditions(searchTerm?: string) {
  if (!searchTerm) return [];

  const term = `%${searchTerm.toLowerCase()}%`;
  return [term];
}

// Standard CRUD response messages
export const CRUD_MESSAGES = {
  CREATED: 'Resource created successfully',
  UPDATED: 'Resource updated successfully',
  DELETED: 'Resource deleted successfully',
  NOT_FOUND: 'Resource not found',
  FORBIDDEN: 'Access denied to this resource',
} as const;

// HTTP status codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
} as const;

// Common validation messages
export const VALIDATION_MESSAGES = {
  REQUIRED: 'This field is required',
  INVALID_EMAIL: 'Please enter a valid email address',
  INVALID_DATE: 'Please enter a valid date',
  POSITIVE_NUMBER: 'Value must be a positive number',
  INVALID_ID: 'Invalid ID parameter',
} as const;