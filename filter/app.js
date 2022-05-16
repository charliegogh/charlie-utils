var aim = [
  { name: 'Anne', age: 23, gender: 'female' },
  { name: 'Leila', age: 16, gender: 'female' },
  { name: 'Jay', age: 19, gender: 'male' },
  { name: 'Mark', age: 40, gender: 'male' }
]

// 单条件多数据
// const arr = ['Leila','Jay']
// console.log(aim.filter(i => arr.includes(i.name)));

// 多条件单数据
// 根据名字或者年龄筛选
function filterByName2(aim, name, age) {
  return aim.filter(item => item.name == name || item.age == age)
}

// 组成{"storage":"64G,128G"，"color":"black,red"}
const obj = { storage: '64G', color: 'red' }
// {"name":"storage","values":[""64G"]},
//     {"name":"color","values":["red"]}

console.log(Object.keys(obj).map(i => ({ name: i, values: [obj[i]] })))

