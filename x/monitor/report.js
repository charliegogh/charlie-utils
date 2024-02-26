const report = (data) => {
  if (!data) return
  if (!navigator.sendBeacon) return

  const formData = new FormData()
  for (const key in data) {
    formData.append(key, data[key])
  }

  navigator.sendBeacon('http://localhost:88/test', formData)
}
(function() {
  report()
}())
