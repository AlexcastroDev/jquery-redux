store.actions.ADD_PEOPLE = 'ADD_PEOPLE'

var peopleReduceInitialState = {
    people: []
}

store.reducers.people = function PeopleReducer(state = peopleReduceInitialState, action) {
    switch(action.type) {
        case store.actions.ADD_PEOPLE:
         return  Object.assign({}, state, {people: action.payload})
        default:
        return state
    }
}