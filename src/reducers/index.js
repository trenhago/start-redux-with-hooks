const initialState = {
    tasks: [],
    isLoading: false,
}

export default function tasks(state = initialState, action) {

    if (action.type === 'CREATE_TASK') {
        return { tasks: state.tasks.concat(action.payload) };
    }

    if (action.type === 'EDIT_TASK') {
        const { payload } = action;
        return {
            tasks: state.tasks.map(task => {
                if (task.id === payload.id) {
                    return Object.assign({}, task, payload.params);
                }

                return task;
            }),
        };
    }

    if (action.type === 'FETCH_TASKS_SUCCEEDED') {
        return {
            ...state,
            isLoading: false,
            tasks: action.payload.tasks,
        };
    }


    if (action.type === 'FETCH_TASKS_STARTED') {
        return {
            ...state,
            isLoading: true,
        };
    }

    return state;
}
