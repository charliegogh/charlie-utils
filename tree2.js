const DEFAULT_CONFIG = {
    id: 'id',
    children: 'children',
    pid: 'pid'
}
const getConfig = config => Object.assign({}, DEFAULT_CONFIG, config)
const tree = {
    // 树查找 1、解构子级查找 2、递归
    findNode(tree, func, config = {}) {
        config = getConfig(config)
        const {children} = config, list = [...tree]
        for (let node of list) {
            if (func(node)) return node
            node[children] && list.push(...node[children])
        }
        return null
    },
    // 扁平化
    flattenTree(tree, config) {
        function f(tree, config) {
            const {children} = getConfig(config)
            return tree.reduce((arr, item) => {
                return arr.concat([item], f(item[children] || []))
            }, [])
        }

        return f(tree)
    },
    // 列表转树
    listToTree(list, config) {
        const {children, id, pid} = getConfig(config)
        const info = list.reduce((map, node) => (map[node[id]] = node, node[children] = [], map), {})
        return list.filter(node => {
            info[node[pid]] && info[node[pid]][children].push(node)
            return !node[pid]
        })
    },
    // 过滤
    filter (tree, func, config = {}) {
        const { children } = getConfig(config)
        function listFilter (list) {
            return list.map(node => ({ ...node })).filter(node => {
                node[children] = node[children] && listFilter(node[children])
                return func(node) || (node[children] && node[children].length)
            })
        }
        return listFilter(tree)
    },
}
if (typeof module == 'undefined' && typeof window != 'undefined') {
    window.treeTool = tree
} else {
    module.exports = tree
}
