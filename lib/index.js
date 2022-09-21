const tree = require('./tree')
const valid = require('./valid')
const storage = require('./storage')
const format = require('./format')
const array = require('./array')
const object = require('./object')
// other
const _ = require('./_')
const modal = {
  tree,
  valid,
  format,
  array,
  object,
  storage,
  ..._
}
module.exports = modal
