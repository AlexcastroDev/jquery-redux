var rootReducer = {
    user: store.reducers.user,
    people: store.reducers.people,
}
var redux = Redux.createStore(Redux.combineReducers(rootReducer))

redux.subscribe(function() {
    const datagrid = redux.getState().people.allowedlist
    const user = redux.getState().user.user

    $('#user').html(user.name)
    $('#datatable').html('')

    datagrid.forEach(function(row, rowKey) {
        $('#datatable').append(`<tr class='row-${rowKey}'></tr>`)

        Object.values(row).forEach(function(column, index) {
            $(`.row-${rowKey}`).append(`<td>${column}</td>`)
        })
    })
})
