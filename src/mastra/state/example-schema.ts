import { z } from "zod";

export const ExampleAgentStateSchema = z.object({
    userId: z.string(),
    userPreferences: z.object({
        theme: z.enum(["light", "dark"]),
    }),
});
