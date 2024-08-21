import { getToken } from './js-cookie'
import { getRefreshToken, logOut } from './auth'

async function permission() {
  if (getToken('LID')) {
    if (!getToken('jwtToken')) {
      await getRefreshToken()
    }
  } else {
    logOut()
  }
}

export default permission
