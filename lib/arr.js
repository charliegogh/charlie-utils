/**
 * @param array
 * @param elements
 * @returns {*}
 * 数组末尾添加
 */
const append = (array, ...elements) => {
    array.push(...elements)
    return array
}
/**
 * @param array
 * @param elements
 * @returns {*}
 * 数组首位添加
 */
const prepend = (array, ...elements) => {
    array.unshift(...elements)
    return array
}
/**
 * @param array
 * @param elements
 * @returns {*}
 * 数组插入
 */
const insert = (array, index, ...elements) => {
    array.splice(index, 0, ...elements)
    return array
}
/**
 * @param array
 * @param elements
 * @returns {*}
 * 删除
 */
const remove = (array, index) => {
    array.splice(index, 1)
    return array
}
/**
 * @param objectArray
 * @param property
 * @returns {*}
 * 按数组对象属性分类
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
 * 将数组转换成对象键值对形式，可方便快速匹配
 */
const arrayToObject = (data, key) => {
    return data.reduce((res, v) => {
        res[v[key]] = {...(res[v[key]] || {}), ...v}
        return res
    }, {})
}
/**
 * pull 删除数组中指定的值
 */
const pull = (arr, ...args) => {
    let argState = Array.isArray(args[0]) ? args[0] : args
    let pulled = arr.filter((v, i) => !argState.includes(v))
    arr.length = 0
    pulled.forEach(v => arr.push(v))
}
/**
 *  求和
 */
const sum = (arr) => {
    return arr.reduce((prev, curr)=>(Number(prev) + Number(curr)))
}
/**
 * 平均值
 */
const average = (...nums) => [...nums].reduce((acc, val) => acc + val, 0) / nums.length;

module.exports = {
    append,
    prepend,
    insert,
    remove,
    arrayToObject,
    dataGroup,
    pull,
    sum,
    average
}
