const DEFAULT_CONFIG = {
    id: 'id',
    children: 'children',
    pid: 'pid'
}
const getConfig = config => Object.assign({}, DEFAULT_CONFIG, config)
const tree = {
    // 树查找 1、解构子级查找 2、递归
    findNode(tree, func, config = {}) {
        const {children} = getConfig(config), list = [...tree]
        for (let node of list) {
            if (func(node)) return node
            node[children] && list.push(...node[children])
        }
        return null
    },
    // 扁平化
    toList (tree, config) {
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
    // 查找树路径
    findPath (tree, func, config = {}) {
        config = getConfig(config)
        const path = [], list = [...tree], visitedSet = new Set(), { children } = config
        while (list.length) {
            const node = list[0]
            if (visitedSet.has(node)) {
                path.pop()
                list.shift()
            } else {
                visitedSet.add(node)
                node[children] && list.unshift(...node[children])
                path.push(node)
                if (func(node)) return path
            }
        }
        return null
    },
    // 查找多个树路径
    findPathAll (tree, func, config = {}) {
        config = getConfig(config)
        const path = [], list = [...tree], result = []
        const visitedSet = new Set(), { children } = config
        while (list.length) {
            const node = list[0]
            if (visitedSet.has(node)) {
                path.pop()
                list.shift()
            } else {
                visitedSet.add(node)
                node[children] && list.unshift(...node[children])
                path.push(node)
                func(node) && result.push([...path])
            }
        }
        return result
    },
    // 树循环
    forEach (tree, func, config = {}) {
        config = getConfig(config)
        const list = [...tree], { children } = config
        for (let i = 0; i < list.length; i++) {
            func(list[i])
            list[i][children] && list.splice(i + 1, 0, ...list[i][children])
        }
    },
    // 删除节点
    removeNode (tree, func, config = {}) {
        config = getConfig(config)
        const { children } = config, list = [tree]
        while (list.length) {
            const nodeList = list.shift()
            const delList = nodeList.reduce((r, n, idx) => (func(n) && r.push(idx), r), [])
            delList.reverse()
            delList.forEach(idx => nodeList.splice(idx, 1))
            const childrenList = nodeList.map(n => n[children]).filter(l => l && l.length)
            list.push(...childrenList)
        }
    }
}
if (typeof module == 'undefined' && typeof window != 'undefined') {
    window.treeTool = tree
} else {
    module.exports = tree
}
