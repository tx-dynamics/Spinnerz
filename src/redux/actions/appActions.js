export const setBoostPost = (data) => async (dispatch) => {
    dispatch({type: "BoostPost" , payload : data})
}