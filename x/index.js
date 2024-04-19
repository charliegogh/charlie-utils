
const typeIcon = {
  0: 'Nooriginal',
  1: 'Word',
  2: 'Word',
  3: 'CAJ',
  4: 'PPT',
  5: 'PDF',
  6: 'PPT',
  7: 'XML'
}
// 生成图标
const iconType = (data) => {
  let shape = 'Local'
  let type = null
  if (data.FileSourceType == 1) {
    type = /xml/gi.test(data.FileType) ? 7 : 5
    shape = 'Online'
  } else {
    type = data.FileType
  }
  return `x-${typeIcon[type] || 'Other'}-${shape}-default`
}

console.log(iconType({
  FileType: '5'
}))
