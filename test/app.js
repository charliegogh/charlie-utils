
const deWeightThree = (arr, tag) => {
  const map = new Map()
  for (const item of arr) {
    if (!map.has(item[tag])) {
      map.set(item[tag], item)
    }
  }
  return [...map.values()]
}

const data = [
  {
    id: 1
  },
  {
    id: 1
  },
  {
    id: 1
  },
  {
    id: 1
  },
  {
    id: 1
  },
  {
    id: 2
  }
]
console.log(deWeightThree(data, 'id'))
