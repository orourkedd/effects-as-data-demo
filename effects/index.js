const { call, buildFunctions } = require("effects-as-data")
const handlers = require("./handlers")
const functions = require("./functions")
const chalk = require("chalk")

const onCommandComplete = t => {
  const color = t.success ? "green" : "red"
  console.log(chalk[color](`${t.command.type} (${t.latency}ms)`))
  console.log(t)
  console.log("---------------------------------------------------------------")
}
const config = { onCommandComplete }

module.exports = buildFunctions(config, handlers, functions)
