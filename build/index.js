const fs = require('fs')
const path = require('path')
copy()
console.log('build success!!')
function copy() {
// 拷贝lib
  const files = fs.readdirSync(path.join(__dirname, '../lib'), { withFileTypes: true })
  for (let i = 0; i < files.length; i++) {
    const file = files[i].name
    fs.copyFileSync(path.join(__dirname, '../lib/' + file), path.join(__dirname, '../dist/' + file))
  }
  // 拷贝 package.json
  fs.copyFileSync(path.join(__dirname, '../package.json'), path.join(__dirname, '../dist/package.json'))
}
