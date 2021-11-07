/* 深拷贝 */
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

/* 生成随机id */
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
/* 数组去重 */
export const unique = function (arr) {
    return Array.from(new Set(arr))
}

/* 数组对象去重 */
export const deWeightThree = function (arr, tag) {
    const map = new Map()
    for (const item of arr) {
        if (!map.has(item[tag])) {
            map.set(item[tag], item)
        }
    }
    return [...map.values()]
}

/* 数组求和 */
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
