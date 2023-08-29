
const tree = require('../lib/tree')
const data = [
    {
        id:'1',
        children:[
            {
                id:'1-1',
            },
            {
                id:'1-2',

            }
        ],
    },
    {
        id:'2',
        children:[
            {
                id:'2-1',
                pid:'2'
            },
            {
                id:'2-2',
                pid:'2'
            }
        ],
    }
]


const rs = tree.toList(data).filter(node=>node.id!=='1')
console.log(tree.listToTree(rs))
