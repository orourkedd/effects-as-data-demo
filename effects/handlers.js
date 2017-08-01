const { handlers: node } = require("effects-as-data-node")
const { handlers: universal } = require("effects-as-data-universal")

module.exports = Object.assign({}, node, universal)
