const INITIAL_STATE = {
    user: null,
    djHimself:true,

}

export default function (state = INITIAL_STATE, action){
    switch(action.type){
        case "User" :
        return {...state, user: action.payload}
        case "DJHimself" :
        return {...state, djHimself: action.payload}
       

        default:
            return state
    }
}