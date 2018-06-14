import { SignIn } from "actions-on-google";

export class DefaultIntents {

    public static welcome(agent: any) {
        agent.add(`Bienvenue chez UGC!`);
    }

    public static fallback(agent:any) {
        agent.add(`I'm sorry, can you try again?`);
    }
}