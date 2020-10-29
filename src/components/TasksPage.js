import TaskList from './TaskList';

const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed'];

function TasksPage(props) {

    const { tasks } = props;

    return (
        <div className="tasks">
            <div className="task-lists">
                {TASK_STATUSES.map(status => {
                    const statusTasks = tasks.filter(task => task.status === status);
                    return <TaskList key={status} status={status} tasks={statusTasks} />;
                })}
            </div>
        </div>
    );
}

export default TasksPage;
