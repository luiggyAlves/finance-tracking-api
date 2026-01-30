import { MongoClient } from "mongodb";

const dburl = "mongodb://localhost:27017"
const client = new MongoClient(dburl)
let receitasCollection, despesasCollection, receitaTotal
const dbName = "finTrack"

const main = async ()=>{
    await client.connect()
    const db = client.db(dbName)
    receitasCollection = db.collection("receitas")
    despesasCollection = db.collection("despesas")
    receitaTotal = db.collection("total")

    return {
        despesasCollection:despesasCollection,
        receitasCollection:receitasCollection,
        receitaTotal:receitaTotal
    }
   
}

export const connectDb = async ()=>{
    try {
        let collections = await main()
        console.log("conectado")
        return collections
        } catch (error) {
        console.log(error)
    }
}

export default {connectDb}

