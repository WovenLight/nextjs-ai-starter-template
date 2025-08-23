import { mastra } from "@/mastra";

import { NextRequest } from "next/server";

import { MastraAgent } from "@ag-ui/mastra";
import {
    CopilotRuntime,
    ExperimentalEmptyAdapter,
    copilotRuntimeNextJSAppRouterEndpoint,
} from "@copilotkit/runtime";

// service adapter here for multi-agent support
const serviceAdapter = new ExperimentalEmptyAdapter();

// API route that handles the CopilotKit runtime requests
export async function POST(req: NextRequest) {
    // Create the CopilotRuntime instance and utilize the Mastra AG-UI
    // integration to get the remote agents
    const runtime = new CopilotRuntime({
        agents: MastraAgent.getLocalAgents({ mastra }),
    });

    const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
        runtime,
        serviceAdapter,
        endpoint: "/api/copilotkit",
    });

    return handleRequest(req);
}
