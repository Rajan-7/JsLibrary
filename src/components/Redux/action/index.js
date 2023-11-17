export const incNumber = (num)=>{
    return {
        type:"INCREMENT",
        payload:num
    }
}

export const deccNumber = (num)=>{
    return {
        type:"DECREMENT",
        payload:num
    }
}