const authReducer = (state = {}, action) => {
    const {uid, displayName, email} = action;
    switch(action.type) {
        case 'LOGIN': return {uid, displayName, email};
        case 'LOGOUT': return {};
        default: return state;
    }
}

export default authReducer;