import {FORMDATA} from '../types'
export const FormData = (data)=>{
    return{
        type: FORMDATA,
        payload: data
    }
}
