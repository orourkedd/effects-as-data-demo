const Koa = require('koa')
const app = new Koa()
const getRandomPerson = require('./get-random-person')

app.use(async ctx => {
  ctx.body = await getRandomPerson()
})

app.listen(3000)
