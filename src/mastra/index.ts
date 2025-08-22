import { Mastra } from "@mastra/core";
import { LibSQLStore } from "@mastra/libsql";

import { exampleAgent } from "./agents/example-agent";

export const mastra = new Mastra({
    storage: new LibSQLStore({
        url: "file:../mastra.db",
    }),
    agents: {
        exampleAgent,
    },
});
