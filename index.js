const Koa = require("koa")
// Regular Javascript
// const getRandomPerson = require("./get-random-person")

// Effects-as-data
const { getRandomPerson } = require("./effects")

const app = new Koa()

app.use(async ctx => {
  ctx.body = await getRandomPerson()
})

app.listen(3000)
