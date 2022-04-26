const tree = require('./tree')
const check = require('./check')
const storage = require('./storage')
const modal = {...tree, ...check, ...storage}
module.exports = modal
