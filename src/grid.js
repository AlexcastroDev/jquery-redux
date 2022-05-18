var addRow = function() {
    redux.dispatch({ type: store.actions.ADD_PEOPLE, payload: [
        {
            name: 'Alex',
            age: '26',
            country: 'Portugal',
        },
        {
            name: 'Karen',
            age: '24',
            country: 'Portugal',
        },
        {
            name: 'Alean',
            age: '58',
            country: 'Portugal',
        }
    ]})
}

