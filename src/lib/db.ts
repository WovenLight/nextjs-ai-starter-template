import { drizzle } from "drizzle-orm/neon-http";

import { neon } from "@neondatabase/serverless";

import * as schema from "./schema";

if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL environment variable is required");
}

// Create the Neon HTTP connection
const sql = neon(process.env.DATABASE_URL);

// Create the Drizzle database instance
export const db = drizzle(sql, { schema });

// Utility function to check database connection
export async function checkDbConnection() {
    if (!process.env.DATABASE_URL) {
        return "No DATABASE_URL environment variable";
    }

    try {
        const result = await sql`SELECT version()`;
        console.log("Pg version:", result);
        return "Database connected";
    } catch (error) {
        console.error("Error connecting to the database:", error);
        return "Database not connected";
    }
}

// Type helper for database operations
export type Database = typeof db;
