import { MongoClient } from "mongodb";

export class MongoDB {
    /**
     * Connect to MongoDB.
     */
    private async connectMongoAsync(): Promise<MongoClient> {

        const uri: string = <string> process.env.MONGODB_URI;

        return await MongoClient.connect(uri, {});
    };

    private async disconnectMongoAsync(client: MongoClient): Promise<void> {
        if(client) {
            await client.close();
        }
    }
}