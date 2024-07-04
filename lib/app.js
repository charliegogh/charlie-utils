const getURLParams = (href) => {
  const searchPar = new URLSearchParams(href)
  const paramsObj = {}
  for (const [key, value] of searchPar.entries()) {
    paramsObj[key] = value
  }
  console.log(paramsObj)
  return paramsObj
}

getURLParams('https://kns.cnki.net/nzkhtml/Trilalread/LitNotes/GetPaperInfo?fileName=YLYS202410002&tableName=CJFDTOTAL&dbCode=CJFD&paperType=part&invoice=GdWWdt%252BfdabBG0O%252F9FmM0O2Dn6585MP6IaunCo8ACTv%252BXmBKsRLKz7h0yi5uoVT5Qv9jsXDaSql1ecC1hfJAHJsuY5f8lASTfhBmOKX3VPPczYQx716L9oHA68%252BT2NDvfdbkUHKTR4N1linFFXQssu%252BQuqvSM7F8AlDb6Fg%252BRrA%253D')
getURLParams('https://kns.cnki.net/nzkhtml/read/readonline.ashx?invoice=GdWWdt%2BfdabBG0O%2F9FmM0O2Dn6585MP6IaunCo8ACTv%2BXmBKsRLKz7h0yi5uoVT5Qv9jsXDaSql1ecC1hfJAHJsuY5f8lASTfhBmOKX3VPPczYQx716L9oHA68%2BT2NDvfdbkUHKTR4N1linFFXQssu%2BQuqvSM7F8AlDb6Fg%2BRrA%3D&dbCode=CJFQ&fileName=YLYS202410002&tableName=cjfdauto&nonce=76D10A63B098421F9EF7D1C9BF18E0EE&appid=KNS_BASIC_PSMC')
