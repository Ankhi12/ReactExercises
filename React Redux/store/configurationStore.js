import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import UsersReducer from '../reducers/UsersReducer'
import userActions from '../actions/userActions'
import PostsReducer from '../reducers/PostsReducer'

const configureStore = ()=>{
    const store = createStore(combineReducers({
        users: UsersReducer,
        posts: PostsReducer
    }), applyMiddleware(thunk))
    
    store.subscribe(()=>{
        console.log('The store value is', store.getState())
    })
    return store
}
export default configureStore
