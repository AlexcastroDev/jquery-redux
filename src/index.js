function injectStore(reducer) {
    var js = document.createElement("script");

    js.type = "text/javascript";
    js.src = reducer;

    document.body.appendChild(js);
}

['PeopleReducer', 'UserReducer'].forEach((reducer) => {
    injectStore('src/store/reducers/' + reducer + '.js')
})

injectStore('src/store/index.js')

var store = {
    actions: {},
    reducers: {},
}