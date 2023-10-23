const tree = require('./tree')
const valid = require('./valid')
const format = require('./format')
const array = require('./array')
const object = require('./object')
const date = require('./date')
// other
const _ = require('./_')
const modal = {
  tree,
  valid,
  format,
  array,
  object,
  ..._,
  ...date
}
module.exports = modal
