import fastify from 'fastify'
// import crypto from 'node:crypto'
import { knex } from './config/db'
import { env } from './env'

const app = fastify() // base da aplicação

app.get('/hello', async () => {
  // INSERT
  /* const transaction = await knex('transactions')
    .insert({
      id: crypto.randomUUID(),
      title: 'First Transaction',
      amount: 2500,
    })
    .returning('*') */

  // SELECT
  const transaction = await knex('transactions')
    .where('amount', 2500)
    .select('*')

  return transaction
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => console.log('Https server is running... '))
