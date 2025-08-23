import z from "zod";

import { useCoAgent } from "@copilotkit/react-core";
import { CopilotChat } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";

import { ExampleAgentStateSchema } from "@/mastra/state/example-schema";

export default function ExampleChat() {
    type AgentState = z.infer<typeof ExampleAgentStateSchema>;

    const { state, setState } = useCoAgent<AgentState>({
        // mastra agent name, under agent -> name
        name: "exampleAgent",
        initialState: {
            userId: 1,
            userPreferences: {
                theme: "light",
            },
        },
    });

    return (
        <div className="copilot-chat-container">
            <CopilotChat
                labels={{
                    title: "Example agent",
                    initial:
                        "Hi! I'm a simple assistant. How can I assist you today?",
                }}
            />
        </div>
    );
}
