import { openai } from "@ai-sdk/openai";
import { Agent } from "@mastra/core/agent";
import { LibSQLStore } from "@mastra/libsql";
import { Memory } from "@mastra/memory";

import { ExampleAgentStateSchema } from "../state/example-schema";

// TODO: setup your OPENAI_API_KEY in .env

export const exampleAgent = new Agent({
    name: "exampleAgent",
    // define agent model
    model: openai("gpt-4o"),
    instructions: `You are a helpful assistant.`,
    // setup the agent memory, in this example in-memory SQLite database is used
    memory: new Memory({
        storage: new LibSQLStore({ url: "file::memory:" }),
        options: {
            workingMemory: {
                enabled: true,
                // define memory schema, also used in useCoAgent on FE for syncing state
                // between FE and Agent
                schema: ExampleAgentStateSchema,
            },
        },
    }),
});
