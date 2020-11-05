import axios from "axios";

let _id = 1;
export function uniqueId() {
  return _id++;
}

export function createTask({ title, description }) {
  return {
    type: 'CREATE_TASK',
    payload: {
      id: uniqueId(),
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

export const fetchTasksSucceeded = tasks => {
  return {
    type: 'FETCH_TASKS_SUCCEEDED',
    payload: {
      tasks
    }
  }
}

export const fetchTasks = () => {
  return dispatch => {
    dispatch(fetchTasksStarted());

    axios.get('http://localhost:3001/tasks')
      .then(resp => {
        setTimeout(() => {
        dispatch(fetchTasksSucceeded(resp.data));
        }, 2000);
      });
  }
}

function fetchTasksStarted() {
  return {
    type: 'FETCH_TASKS_STARTED',
  };
}
