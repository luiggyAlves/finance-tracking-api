import actionsRouter from "./actionsRouter.js"

async function routes (fastify, _opts){
    fastify.register(actionsRouter,{prefix:"finTrack"})
}

export default routes