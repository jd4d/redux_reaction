import { combineReducers } from 'redux'
import {
    REQUEST_ACTIVITY,
    RECEIVE_ACTIVITY,
    CHANGE_FORM
} from './actions'

const networkActivity = (state = {isFetching: false, activity: [], lastUpdated: null}, action) => {
    switch (action.type) {
        case REQUEST_ACTIVITY:
            return Object.assign({}, state, {
                isFetching: true
            })
        case RECEIVE_ACTIVITY:
            return Object.assign({}, state, {
                isFetching: false,
                activity: action.activity,
                lastUpdated: action.receivedAt
            })
        default:
            return state
    }
}

const authenticate = (state = {loginData: {email: '', password: ''}}, action) => {
  switch (action.type) {
    case CHANGE_FORM:
    console.log(state)
    return Object.assign({}, state, {loginData: action.loginData})
    default:
      return state
  }
}
const rootReducer = combineReducers({
    networkActivity,
    authenticate
})

export default rootReducer
