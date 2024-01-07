// Action Types

const addTodo = 'ADD_TODO'
const removeTodo = 'REMOVE_TODO'
const doTodo = 'DO_TODO'

// Reducer
export default function reducer(state = [{id : 1,title :'watch_tv'},{id:2,title:'do_exercise'}], action) {
    switch (action.type) {
        case addTodo: {
            return [...state, action.payload]
        }
        case removeTodo: {
            return state.filter(todo => todo.id !== action.payload.id)
        }
        case doTodo: {
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    todo.isDone = !todo.isDone
                }
                return todo;
            })
        }
        default : {
            return state;
        }
    }
}

// Actions Creator
export const addTodoAction = (title) => (
    {
        type: addTodo,
        payload: {
            id: crypto.randomUUID(),
            title,
            isDone: false,
        }
    }
)

export const removeTodoAction = (id) => {
    return {
        type: removeTodo,
        payload: { id }
    }
}
export const doTodoAction = (id) => {
    return {
        type: doTodo,
        payload: { id }
    }
}