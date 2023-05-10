import {createStore, combineReducers} from 'redux'
import QuoteFormReducer from '../reducer/QuoteFormReducer'
const configureStore = ()=>{
    const store = createStore(combineReducers({
        quoteForm: QuoteFormReducer,
    }))
    store.subscribe(()=>{
        console.log('Updated value is', store.getState())
    })
    return store
}
export default configureStore
