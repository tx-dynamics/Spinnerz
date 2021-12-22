import {combineReducers} from "redux"
import authReducer from 'src/redux/reducers/authReducers'
import appReducer from 'src/redux/reducers/appReducers'

const rootReducers = combineReducers({
    auth : authReducer,
    app : appReducer
})

export default rootReducers
