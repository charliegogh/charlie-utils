const tree = require('./tree')
const check = require('./check')
const storage = require('./storage')
const format = require('./format')
const modal = {...tree, ...check, ...storage,...format}
module.exports = modal
