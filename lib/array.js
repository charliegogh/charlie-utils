/**
 * @param obj
 * 是否为数组
 * 篡改  Proxy 对象的 constructor 和原型链,可以正常工作
 */
const isArray = arr => Array.isArray(arr)

/**
 * 数组末尾添加
 */
const append = (array, ...elements) => {
    array.push(...elements)
    return array
}

/**
 * 数组首位添加
 */
const prepend = (array, ...elements) => {
    array.unshift(...elements)
    return array
}

/**
 * 数组插入
 */
const insert = (array, index, ...elements) => {
    array.splice(index, 0, ...elements)
    return array
}

/**
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
const groupBy = (objectArray, property) => {
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
    return arr.reduce((prev, curr) => (Number(prev) + Number(curr)))
}
/**
 * 平均值
 */
const average = (...nums) => [...nums].reduce((acc, val) => acc + val, 0) / nums.length;
/**
 * 数组去重
 */
const unique = function (arr) {
    return Array.from(new Set(arr))
}
/**
 * 数组对象去重
 */
const deWeightThree = (arr, tag) => {
    const map = new Map()
    for (const item of arr) {
        if (!map.has(item[tag])) {
            map.set(item[tag], item)
        }
    }
    return [...map.values()]
}
/**
 * @param arr
 * @param props 根据传递顺序使用数组解构来交换位置  ['xx']
 * @param orders 默认aes升序， ['asc','desc']
 * @returns {*[]}
 */
const orderBy = (arr, props, orders) =>
    [...arr].sort((a, b) =>
        props.reduce((acc, prop, i) => {
            if (acc === 0) {
                const [p1, p2] = orders && orders[i] === 'desc' ? [b[prop], a[prop]] : [a[prop], b[prop]]
                acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0
            }
            return acc
        }, 0)
    )

/**
 * @param arr
 * @returns {number}
 * 数组最大值
 */
const arrayMax = arr => Math.max(...arr)
/**
 * @param arr
 * @returns {number}
 * 数组最小值
 */
const arrayMin = arr => Math.min(...arr)


/**
 * @param array
 * @returns {boolean}
 * js 判断判断数组中是否包含重复数据
 */

const hasDuplicates = (array) => ((new Set(array)).size !== array.length)

/**
 * 严格模式重写 indexOf
 * @param _
 */
const indexOf = (array, _) => {
    for (let i = 0; i < array.length; i += 1) {
        if (!array.hasOwnProperty(i)) continue;
        if (_ === array[i]) return i;
    }
    return -1;
}


module.exports = {
    append,
    prepend,
    insert,
    remove,
    arrayToObject,
    groupBy,
    pull,
    sum,
    average,
    unique,
    deWeightThree,
    orderBy,
    arrayMax,
    arrayMin,
    isArray,
    hasDuplicates,
    indexOf
}
