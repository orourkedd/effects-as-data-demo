const cmds = require("./cmds")

function* getRandomPerson() {
  const randomNumber = yield cmds.randomNumber()
  const id = Math.floor(randomNumber * 100)
  let person
  try {
    person = yield cmds.httpGet(`https://swapi.co/api/people/${id}`)
  } catch (e) {
    const readFile = cmds.readFile("/tmp/person.txt", { encoding: "utf8" })
    return yield cmds.either(readFile, "R2D2")
  }
  yield cmds.writeFile("/tmp/person.txt", person.name, { encoding: "utf8" })
  return person.name
}

exports.getRandomPerson = getRandomPerson
