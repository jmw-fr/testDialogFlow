import { SignIn, Conversation } from "actions-on-google";

export class DefaultIntents {

    public static welcome(agent: Conversation<any>) {
        agent.add(`Bienvenue chez UGC!`);
    }

    public static fallback(agent: Conversation<any>) {
        agent.add(`I'm sorry, can you try again?`);
    }
}