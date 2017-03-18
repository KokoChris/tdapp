module.exports = {
    setTodos: (todos) => {
        localStorage.setItem('todos', JSON.stringify(todos));
    },
    getTodos: () => {
        return localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
    },
    getFilteredTodos: (todos, showCompleted, searchText) => {
        var filteredTodos = todos.filter((todo) => {
            if (showCompleted === true) {
                return true;
            } else {
                return todo.completed !== true;
            }
        }).filter(todo => {
            return todo.text.toLowerCase().indexOf(searchText) !== -1;
        });
        return filteredTodos.sort((a, b) => {
            if ((!a.completed && b.completed)) {
                return -1
            }
            if ((a.completed && !b.completed)) {
                return 1
            }
            return 0;

        })
    }
}