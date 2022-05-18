store.actions.ADD_USER = 'ADD_USER'

var userReduceInitialState = {
    user: {}
}

store.reducers.user = function UserReducer(state = userReduceInitialState, action) {
    switch(action.type) {
        case store.actions.ADD_USER:
         return  Object.assign({}, state, {user: action.payload})
        default:
        return state
    }
}