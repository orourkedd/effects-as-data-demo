const { getRandomPerson } = require('./functions')
const { testFn, args } = require('effects-as-data/test')
const cmds = require('./cmds')

const testGetRandomPerson = testFn(getRandomPerson)

test(
  'getRandomPerson() should get a random person',
  testGetRandomPerson(() => {
    // prettier-ignore
    return args()
      .returns()
  })
)

test(
  'getRandomPerson() should fallback to cache when httpGet fails',
  testGetRandomPerson(() => {
    // prettier-ignore
    return args()
      .returns()
  })
)
