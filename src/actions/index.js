export function createTask({ title, description }) {
  return {
    type: 'CREATE_TASK_STARTED',
    payload: {
      title,
      description,
      status: 'Unstarted',
    },
  };
}

export function editTask(id, params = {}) {
    return {
        type: 'EDIT_TASK',
        payload: {
            id,
            params
        }
    };
}

export function fetchTasks() {
  return {
    type: 'FETCH_TASKS_STARTED'
  };
}
