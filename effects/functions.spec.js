const { getRandomPerson } = require("./functions")
const { testFn, args } = require("effects-as-data/test")
const cmds = require("./cmds")

const testGetRandomPerson = testFn(getRandomPerson)

test(
  "getRandomPerson() should get a random person",
  testGetRandomPerson(() => {
    // prettier-ignore
    return args()
      .yieldCmd(cmds.randomNumber()).yieldReturns(0.25)
      .yieldCmd(cmds.httpGet(`https://swapi.co/api/people/25`)).yieldReturns({ name: 'Luke Skywalker'})
      .yieldCmd(cmds.writeFile('/tmp/person.txt', 'Luke Skywalker', { encoding: 'utf8' })).yieldReturns()
      .returns('Luke Skywalker')
  })
)

test(
  "getRandomPerson() should fallback to cache when httpGet fails",
  testGetRandomPerson(() => {
    const readFile = cmds.readFile("/tmp/person.txt", { encoding: "utf8" })
    // prettier-ignore
    return args()
      .yieldCmd(cmds.randomNumber()).yieldReturns(0.25)
      .yieldCmd(cmds.httpGet(`https://swapi.co/api/people/25`)).yieldReturns(new Error('oops'))
      .yieldCmd(cmds.either(readFile, 'R2D2')).yieldReturns('R2D2')
      .returns('R2D2')
  })
)
