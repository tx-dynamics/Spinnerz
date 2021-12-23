const INITIAL_STATE = {
    boostPost: null
}

export default function (state = INITIAL_STATE, action){
    switch(action.type){
        case "BoostPost" :
        return {...state, boostPost: action.payload}

        default:
            return state
    }
}