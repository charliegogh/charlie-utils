/**
 *  数组工具 末尾新增、首新增、插入、删除
 */
const arrayUtils = {
  append(array, ...elements) {
    array.push(...elements)
    return array
  },
  prepend(array, ...elements) {
    array.unshift(...elements)

    return array
  },
  insert(array, index, ...elements) {
    array.splice(index, 0, ...elements)
    return array
  },
  remove(array, index) {
    array.splice(index, 1)
    return array
  }
}
/**
 * @param objectArray
 * @param property
 * @returns {*}
 * 按属性对object分类
 */
const dataGroup = (objectArray, property) => {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property]
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(obj)
    return acc
  }, {})
}

/**
 * 平均数
 */
const mean = () => {

}

export {
  dataGroup,
  arrayUtils
}
