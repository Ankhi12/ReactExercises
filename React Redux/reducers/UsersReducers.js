import { getUsers } from "../actions/userActions"
import { USERSDATA, ERRORDATA} from "../types"
const initialState = {
    users: []
}
const UsersReducer = (state = initialState, action) =>{
    switch(action.type){
        case USERSDATA: {
            return{
                ...state,
                users: action.payload
            }
        }
        case ERRORDATA:{
            return `Error occured ${action.payload}`
        }
        default: return state
    }
    return state
}

export default UsersReducer

