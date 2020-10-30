import TasksPage from './components/TasksPage';
import './App.css';

import { useSelector, useDispatch } from "react-redux";
import { createTask } from "./actions";

function App() {

  const mockTasks = useSelector( state => state.tasks );
  const dispatch = useDispatch();

  const onCreateTask = ({ title, description}) => {
    dispatch(createTask({ title, description }));
  }

  return (
    <div className="main-content">
      <TasksPage 
        tasks={mockTasks}
        onCreateTask={onCreateTask} />
    </div>
  );
}

export default App;
