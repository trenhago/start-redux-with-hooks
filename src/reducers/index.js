const initialState = {
    tasks: [],
    isLoading: false,
}

export default function tasks(state = initialState, action) {

    if (action.type === 'FETCH_TASKS_STARTED') {
        return {
            ...state,
            isLoading: true,
        };
    }

    if (action.type === 'FETCH_TASKS_SUCCEEDED') {
        return {
            ...state,
            isLoading: false,
            tasks: action.payload.tasks,
        };
    }

    if ( action.type === 'FETCH_TASKS_FAILED') {
        return {
            ...state,
            isLoading: false,
            error: action.payload.error,
        };
    }

    if (action.type === 'CREATE_TASK_SUCCEEDED') {
        return {
            ...state,
            tasks: state.tasks.concat(action.payload.task),
          };
    }

    if (action.type === 'EDIT_TASK_SUCCEEDED') {
        const { payload } = action;
        const nextTasks = state.tasks.map(task => {
            if (task.id === payload.task.id) {
                return payload.task;
            }
            return task;
        });
        return {
            ...state,
            tasks: nextTasks,
        };
    }

    return state;
}
