export const setUser = (data) => async (dispatch) => {
    dispatch({type: "User" , payload : data})
}
export const setDjHimself = (data) => async (dispatch) => {
    dispatch({type: "DJHimself" , payload : data})
}
