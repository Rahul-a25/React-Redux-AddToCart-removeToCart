const initial={
    API:'Nothing'
}
const rootreducer=(storeData=initial,action)=>{
    if(action.type==='api'){
        return {
            api:action.payload
        }
    }
   return storeData
}
export default rootreducer