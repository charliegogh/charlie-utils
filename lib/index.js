const treeUtils = require('./tree')
const check = require('./check')
const storage = require('./storage')
const format = require('./format')
const arrUtils = require('./arr')
const modal = {treeUtils, ...check, ...storage,...format, arrUtils}
module.exports = modal
