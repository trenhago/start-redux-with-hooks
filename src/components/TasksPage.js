import React, { useState } from 'react';
import TaskList from './TaskList';

import { TASK_STATUSES } from '../constants';

const TasksPage = props => {

    const [state, setState] = useState({
        showNewCardForm: false,
        title: '',
        description: '',
    });

    const onTitleChange = e => {
        setState({ ...state, title: e.target.value });
    };

    const onDescriptionChange = e => {
        setState({ ...state, description: e.target.value });
    };

    const resetForm = () => {
        setState({
            ...state, 
            showNewCardForm: false,
            title: '',
            description: '',
        });
    }

    const onCreateTask = e => {
        e.preventDefault();
        props.onCreateTask({
            title: state.title,
            description: state.description,
        });
        resetForm();
    };

    const toggleForm = () => {
        setState({ ...state, showNewCardForm: !state.showNewCardForm });
    };

    const renderTaskLists = () => {
        const { onStatusChange, tasks } = props;

        return TASK_STATUSES.map(status => {
            const statusTasks = tasks.filter(task => task.status === status);
            return (
                <TaskList
                    key={status}
                    status={status}
                    tasks={statusTasks}
                    onStatusChange={onStatusChange}
                />
            );
        });
    }

    return (
        <div className="tasks">
            <div className="tasks-header">
                <button className="button button-default" onClick={toggleForm}>
                    + New task
          </button>
            </div>

            {state.showNewCardForm &&
                <form className="new-task-form" onSubmit={onCreateTask}>
                    <input
                        className="full-width-input"
                        onChange={onTitleChange}
                        value={state.title}
                        type="text"
                        placeholder="title"
                    />
                    <input
                        className="full-width-input"
                        onChange={onDescriptionChange}
                        value={state.description}
                        type="text"
                        placeholder="description"
                    />
                    <button className="button" type="submit">
                        Save
            </button>
                </form>}

            <div className="task-lists">
                {renderTaskLists()}
            </div>
        </div>
    );
}

export default TasksPage;
