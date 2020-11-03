import { useEffect } from "react";
import TasksPage from './components/TasksPage';
import { createTask, editTask, fetchTasks } from "./actions";

import { useSelector, useDispatch } from "react-redux";
import FlashMessage from "./components/FlashMessage";

function App(props) {
  // let { tasks, isLoading, error } = useSelector(state => state.tasks);
  const { tasks, isLoading, error } = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(fetchTasks())
    }, [dispatch]);

  const onCreateTask = ({ title, description }) => {
    dispatch(createTask({ title, description }));
  }

  const onStatusChange = (id, status) => {
    dispatch(editTask(id, { status }));
  }

  return (
    <div className="container">
      {error &&
        <FlashMessage message={error} />
      }
      <div className="main-content">
        <TasksPage
          tasks={tasks}
          onCreateTask={onCreateTask}
          onStatusChange={onStatusChange}
          isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;
