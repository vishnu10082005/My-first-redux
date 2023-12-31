import Reducer from "./Reducer"
import {createStore} from "redux"
const Store=createStore(Reducer,{count:0,todo:[]})
Store.subscribe(()=>{
    console.log(Store.getState())
})
export default Store
