import {connectDb} from "../db/config.js"
import { viewTotal,viewAllDespesas,viewAllReceitas,addValueDespesa,addValueReceita} from "../functions/functions.js"

const collections = await connectDb()
let receitaTotal = collections.receitaTotal
let despesasCollection= collections.despesasCollection
let receitasCollection = collections.receitasCollection

async function actionsRouter(fastify,_options){
    fastify.get("/despesas", async(_request, reply)=>{
        try {
            const despesas = await viewAllDespesas(despesasCollection)
            reply.send(despesas)
        } catch (error) {
            reply.send(error)
        }
    });

    fastify.get("/receitas", async (_request, reply)=>{
        try {
            const receitas = await viewAllReceitas(receitasCollection)
            reply.send(receitas)
        } catch (error) {
            reply.send(error)
        }
    })

    fastify.get("/total", async (_request, reply)=>{
        try {
            const total = await viewTotal(receitaTotal)
            reply.send(total)     
        } catch (error) {
            reply.send(error)
        }
    });
    
    fastify.post("/receitas", async (request, reply) =>{
       try {
            const {descricao, value} =request.body
            const newReceita = await addValueReceita(descricao, value, receitasCollection, receitaTotal)
            reply.send(newReceita)

       } catch (error) {
            reply.send(error)
       }
    })

    fastify.post("/despesas", async (request, reply) =>{
        try {
            const {descricao, value} = request.body
            const newDespesa = await addValueDespesa(descricao, value, despesasCollection, receitaTotal)
            reply.send(newDespesa)
        } catch (error) {
            reply.send(error)
        }
    })
}

export default actionsRouter