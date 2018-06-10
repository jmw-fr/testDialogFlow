
export class DefaultIntents {

    public static welcome(agent: any) {
        agent.add(`Bienvenue chez UGC! Quel film voudriez-vous voir ?`);
    }

    public static fallback(agent:any) {
        agent.add(`I'm sorry, can you try again?`);
    }
}