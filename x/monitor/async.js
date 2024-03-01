(async() => {
  await fetch(
    'https://x.cnki.net/1we1b/psmc/js/app.01b24398.js',
    {
      method: 'GET'
    })
    .catch(e => {
      throw e
    })
})()
