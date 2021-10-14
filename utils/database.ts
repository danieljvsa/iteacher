import {MongoClient, Db} from 'mongodb'

type ConnectType = {
    db: Db,
    client: MongoClient
}

export default async function connect(): Promise<ConnectType> {
    
    const client = await MongoClient.connect(process.env.DATABASE_URL!, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    
    if(!client.isConnected) await client.connect() 

    const db = client.db('iteacher')

    return {db, client}
}