const defaultUser = {userName: 'Aden'}

const userReducer = (state=defaultUser, action) => {
    switch(action.type){
        case 'CREATE_USER':
            return [...state, ...action.user]
        case 'EDIT_USER':
            return state.map((user)=> {if (user.userID === action.userID){
                return {
                    ...user,
                    ...action.updates
                }
            }})
        case 'REMOVE_USER':
            return state.filter((user)=> user.userID != action.userID)
        case 'SET_USER':
            console.log('Current user is:', action.userName);
            return {userName:action.userName}
        default:
            return state;
    }
}

export default userReducer;