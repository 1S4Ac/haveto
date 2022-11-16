import { combineReducers } from "@reduxjs/toolkit";
import todosReducer from './todos/slice'
import globalReducer from './global/slice'

const rootReducer = combineReducers({
    todos: todosReducer,
    global: globalReducer
})

export default rootReducer