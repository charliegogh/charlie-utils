/**
 * @param str
 * @param substr
 * @param newstr
 * @returns {*}
 * 字符串替换
 */
export function replaceString(str, substr, newstr) {
    substr = substr.replace(/[.\\[\]{}()|^$?*+]/g, '\\$&') // 转义字符串中的元字符
    var re = new RegExp(substr, 'g') // 生成正则
    return str.replace(re, newstr)
}
/**
 * @param source
 * @returns {*[]}
 * 深拷贝
 */
export function deepClone(source) {
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

/**
 * @returns {string}
 * 生成随机id
 */
export const createUUID = function () {
    var d = new Date().getTime()
    if (window.performance && typeof window.performance.now === 'function') {
        d += performance.now() // use high-precision timer if available
    }
    var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0
        d = Math.floor(d / 16)
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16)
    })
    return uuid
}
/**
 * @param arr
 * @returns {any[]}
 * 数组去重
 */
export const unique = function (arr) {
    return Array.from(new Set(arr))
}
/**
 * @param arr tag
 * @returns {any[]}
 * 数组对象去重
 */
export const deWeightThree = function (arr, key) {
    const map = new Map()
    for (const item of arr) {
        if (!map.has(item[key])) {
            map.set(item[key], item)
        }
    }
    return [...map.values()]
}
/**
 * @param arr
 * @returns {*}
 * 数组求和
 */
export const sum = function (arr) {
    return arr.reduce(function (prev, curr, idx, arr) {
        return Number(prev) + Number(curr)
    })
}

/**
 * @param data
 * @param key
 * @returns {*}
 * 数组转化为类数组
 */
export function arrayToObject(data, key) {
    return data.reduce((res, v) => {
        res[v[key]] = { ...(res[v[key]] || {}), ...v }
        return res
    }, {})
}
/**
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate 防抖
 * @return {*}
 */
export function debounce(func, wait, immediate) {
    let timeout, args, context, timestamp, result

    const later = function() {
        // 据上一次触发时间间隔
        const last = +new Date() - timestamp

        // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
        if (last < wait && last > 0) {
            timeout = setTimeout(later, wait - last)
        } else {
            timeout = null
            // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
            if (!immediate) {
                result = func.apply(context, args)
                if (!timeout) context = args = null
            }
        }
    }

    return function(...args) {
        context = this
        timestamp = +new Date()
        const callNow = immediate && !timeout
        // 如果延时不存在，重新设定延时
        if (!timeout) timeout = setTimeout(later, wait)
        if (callNow) {
            result = func.apply(context, args)
            context = args = null
        }

        return result
    }
}
// 数据归类
/**
 * 根据对象属性分组
 * @param objectArray
 * @param property
 * @returns {unknown[]}
 */
export function dataGroup(objectArray, property) {
    return objectArray.reduce(function(acc, obj) {
        const key = obj[property]
        if (!acc[key]) {
            acc[key] = []
        }
        acc[key].push(obj)
        return acc
    }, {})
}
