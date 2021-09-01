import { applyMiddleware, combineReducers, compose, createStore, Action } from "redux"
import thunkMiddleware, { ThunkAction } from "redux-thunk"
import photosMarsReduser from "./photosMars-reduser"

const rootReducer = combineReducers({
  photosMars: photosMarsReduser,
})

const initialState = {}
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(thunkMiddleware)
  )
)

export default store

type rootReducerType = typeof rootReducer
export type AppStateT = ReturnType<rootReducerType>
export type InferActionsT<T> = T extends {[keys: string]: (...args: any[]) => infer U } ? U : never
export type BaseThunkT<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateT, unknown, A>