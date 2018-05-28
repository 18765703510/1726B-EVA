

const state = {
    todos: localStorage.todos ? JSON.parse( localStorage.todos ) : []
}

export default state