/**
 * @param obj
 * 是否为对象
 */
const isObject = obj => Object.prototype.toString.call(obj) === '[object Object]'
/**
 * @param obj
 * 是否为数组
 */
const isArray = arr => Array.isArray(arr)
/**
 * 对象深层合并
 */
const merge = (target, ...arg) => {
  return arg.reduce((acc, cur) => {
    return Object.keys(cur).reduce((subAcc, key) => {
      const srcVal = cur[key]
      if (isObject(srcVal)) {
        subAcc[key] = merge(subAcc[key] ? subAcc[key] : {}, srcVal)
      } else if (isArray(srcVal)) {
        // series: []，下层数组直接赋值
        subAcc[key] = srcVal.map((item, idx) => {
          if (isObject(item)) {
            const curAccVal = subAcc[key] ? subAcc[key] : []
            return merge(curAccVal[idx] ? curAccVal[idx] : {}, item)
          } else {
            return item
          }
        })
      } else {
        subAcc[key] = srcVal
      }
      return subAcc
    }, acc)
  }, target)
}

/**
 * 深拷贝
 */
const deepClone = (source) => {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'deepClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  Object.keys(source).forEach(keys => {
    if (source[keys] && typeof source[keys] === 'object') {
      targetObj[keys] = deepClone(source[keys])
    } else {
      targetObj[keys] = source[keys]
    }
  })
  return targetObj
}

// 检测对象是否为空
const isEmpty = obj => Reflect.ownKeys(obj).length === 0 && Object.constructor === Object

module.exports = {
  isObject,
  isArray,
  merge,
  deepClone,
  isEmpty
}
