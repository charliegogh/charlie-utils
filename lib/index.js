const tree = require('./tree')
const valid = require('./valid')
const storage = require('./storage')
const format = require('./format')
const arr = require('./arr')
const object = require('./object')
// other
const _ = require('./_')
const modal = {
  tree,
  valid,
  format,
  arr,
  object,
  storage,
  ..._
}
module.exports = modal
