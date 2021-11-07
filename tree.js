/* 树查找 */
export const findTree = function (tree, func) {
    for (const data of tree) {
        if (func(data)) return data
        if (data.children) {
            const res = findTree(data.children, func)
            if (res) return res
        }
    }
    return null
}
/**
 * @param tree
 * 扁平化
 */
export const flattenTree = function (tree) {
    return tree.reduce((arr, item) => {
        arr.concat([item], flattenTree(item.children || []))
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

/* 获取所有父级 */
