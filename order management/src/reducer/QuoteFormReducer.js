import { FORMDATA } from '../types'
const initialState = {
    formdata:[]
}
const QuoteFormReducer = (state=initialState, action)=>{
   console.log('The payload is', action.payload)
    switch(action.type){
        case FORMDATA: {
            return{
                ...state,
                formdata: [...state.formdata, action.payload]
            }
        }
        default:
            return state
    }
}
export default QuoteFormReducer
