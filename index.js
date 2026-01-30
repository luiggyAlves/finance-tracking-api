import Fastify from "fastify";
import formbody from '@fastify/formbody'
import routes from "./routes/index.js";

const app = Fastify()
await app.register(formbody)
const PORT = 3000
app.register(routes)

try {
    await app.listen({port:PORT})
    console.log(`listening at http://localhost:${PORT}`)
} catch (error) {
    console.log(error)
    process.exit(1)
}






