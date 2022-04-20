const tree=[
    {
        name:'1',
        id:'1',
        children:[
            {
                name:'1-1',
                id:'1-1'
            },
            {
                name:'1-2',
                id:'1-2'
            }
        ]
    }
]

const list = [
    { name: '2', id: '2' },
    { name: '1', id: '1' },
    { name: '1-1', id: '1-1',pid:'1' },
    { name: '1-2', id: '1-2',pid:'1' },
    { name: '1-2', id: '1-2',pid:'1-2' },
]




const {filter} =require('../tree2')
const rs = filter(tree,(item)=>(item.id==='1-1'))
console.log(rs)
