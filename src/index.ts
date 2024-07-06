import fastify from 'fastify'
import { knex } from './config/db'

const app = fastify() // base da aplicação

app.get('/hello', async () => {
  const tables = await knex('sqlite_schema').select('*')

  return tables
})

app
  .listen({
    port: 3333,
  })
  .then(() => console.log('Https server is running... '))
