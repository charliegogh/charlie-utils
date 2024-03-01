function formatDate(dateString) {
  const dateObject = new Date(dateString)
  const year = dateObject.getFullYear()
  const month = dateObject.getMonth() + 1 // 月份是从0开始计数的，所以要加1
  const day = dateObject.getDate()
  const formattedDate = `${year}/${month.toString().padStart(2, '0')}/${day
    .toString()
    .padStart(2, '0')}`
  return formattedDate
}

console.log(formatDate('2024-03-05 23:59:59'))
