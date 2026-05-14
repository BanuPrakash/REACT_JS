// reducer functions takes state and action, returns new state 
export default function taskReducer(state = [], action) {
    switch(action.type) {
        case "ADD_TASK":
            // clone existing task states and add new task
            return [...state, { id: Date.now(), text: action.payload, completed: false}]
        case "TOGGLE_TASK":
            return state.map(task => task.id === action.payload ? 
                    {...task, completed: ! task.completed}: task)
        case "REMOVE_TASK":
            return state.filter(task => task.id !== action.payload)
        default:
            return state;
    }
}

