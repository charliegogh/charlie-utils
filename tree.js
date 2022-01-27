/* 树查找 */
export const findTree = function (tree, func) {
    if (!Array.isArray(tree)){
        return
    }
    for (const data of tree) {
        if (func(data)) return data
        if (data.children) {
            const res = findTree(data.children, func)
            if (res) return res
        }
    }

}
/**
 * @param tree
 * 扁平化
 */
export const flattenTree = function (tree) {
    return tree.reduce((arr, item) => {
        return arr.concat([item], flattenTree(item.children || []))
    }, [])
}
/**
 * @param list
 * @returns {*}
 * 列表转树
 */
export const listToTree = function (list) {
    const info = list.reduce((map, node) => (map[node.id] = node, node.children = [], map), {})
    return list.filter(node => {
        info[node.parentId] && info[node.parentId].children.push(node)
        return !node.parentId
    })
}

// 数组对象去重
export function deWeightThree(arr, tag) {
    const map = new Map()
    for (const item of arr) {
        if (!map.has(item[tag])) {
            map.set(item[tag], item)
        }
    }
    return [...map.values()]
}
