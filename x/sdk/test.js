const e = {
  extinfo: {
    action: 'openHtml',
    actionUrl: 'https://x.cnki.net/activity?openHtml=https://x.cnki.net/activity/signIn.html'
  }
}
const extinfo = JSON.stringify(e.extinfo || { action: 'readService', actionUrl: window.location.href })

console.log(extinfo)
