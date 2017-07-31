import {
    CHANGE_FORM, LOGIN_USER_REQUESTED, LOGIN_USER_SUCCEEDED, USER_IS_LOGGED_IN
} from '../actionTypes'

let initialState = {
  loginData: {
    email: '',
    password: ''
  },
  isLoggedIn: false
}
export default function authenticate(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FORM:
      return Object.assign({}, state, {loginData: action.loginData})
    case LOGIN_USER_SUCCEEDED:
      return Object.assign({}, state, {loginData: {email: '', password: ''}, isLoggedIn: action.isLoggedIn})
    case USER_IS_LOGGED_IN:
        return Object.assign({}, state, {isLoggedIn: true})
    default:
      return state
  }
}
