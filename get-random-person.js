const fs = require('fs')
const { promisify } = require('util')
const writeFile = promisify(fs.writeFile)
const readFile = promisify(fs.readFile)
const fetch = require('fetch-everywhere')

async function getRandomPerson() {
  const id = Math.floor(Math.random() * 100)
  try {
    const response = await fetch(`https://swapi.co/api/people/${id}`)
    if (response.status !== 200) throw new Error('Non 200 response')
    const person = await response.json()
    writeFile('/tmp/person.txt', person.name, { encoding: 'utf8' })
    return person.name
  } catch (e) {
    const cached = await readFile('/tmp/person.txt', { encoding: 'utf8' })
    return cached ? cached : 'Default Person'
  }
}

module.exports = getRandomPerson
