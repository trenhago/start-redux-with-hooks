import TasksPage from './components/TasksPage';
import { createTask, editTask } from "./actions";

import { useSelector, useDispatch } from "react-redux";

function App() {
  const mockTasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const onCreateTask = ({ title, description}) => {
    dispatch(createTask({ title, description}));
  }

  const onStatusChange = (id, status) => {
    dispatch(editTask(id, { status}));
  }

  return (
    <div className="main-content">
      <TasksPage 
        tasks={mockTasks} 
        onCreateTask={onCreateTask} 
        onStatusChange={onStatusChange} />
    </div>
  );
}

export default App;
