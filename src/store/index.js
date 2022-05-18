var redux = Redux.createStore(store.reducers.people)

redux.subscribe(function() {
    const datagrid = redux.getState().people

    datagrid.forEach(function(row, rowKey) {
        $('#datatable').append(`<tr class='row-${rowKey}'></tr>`)

        Object.values(row).forEach(function(column, index) {
            $(`.row-${rowKey}`).append(`<td>${column}</td>`)
        })
    })
    
})
