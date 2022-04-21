const tree = [
    {
        name: '1',
        id: '1',
        children: [
            {
                name: '1-1',
                id: '1-1'
            },
            {
                name: '1-2',
                id: '1-2'
            },
        ]
    },
]
/*const visitedSet = new Set()
const path = []
const result = []
while (tree.length) {
    const node = tree[0]
    if (visitedSet.has(node)) {
        path.pop()
        tree.shift()
    } else {
        visitedSet.add(node)
        node['children'] && tree.unshift(...node['children'])
        path.push(node)
        if (node.id === '1-1') {
            result.push(...path)
        }
    }
}*/
// console.log(result)

const {removeNode} =require('../dist/tree')
removeNode(tree,node=>node.id==='1-2')


let rs= [],queue=tree
while (queue.length>0){
    [...queue].forEach(child=>{
        queue.shift()
        rs.push(child.name)
        child.children && (queue.push(...child.children))
    })
}
console.log(rs);













