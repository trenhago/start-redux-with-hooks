import Task from '../components/Task';
import '../index.css';

import { action } from "@storybook/addon-actions";

export default {
    component: Task,
    title: 'Projeto/Task'
}

export const Unstarted = () => (

    <Task
        task={{
                id: 1,
                title: "Learn Redux",
                description: "The store, actions, and reducers, oh my!",
                status: "Unstarted"
            }
        }
        onStatusChange={action('onStatusChange')}
    />

);

export const InProgress = () => (

    <Task
        task={{
                id: 1,
                title: "Learn Redux",
                description: "The store, actions, and reducers, oh my!",
                status: "In Progress"
            }
        }
        onStatusChange={action('onStatusChange')}
    />

);

export const Completed = () => (

    <Task
        task={{
                id: 1,
                title: "Learn Redux",
                description: "The store, actions, and reducers, oh my!",
                status: "Completed"
            }
        }
        onStatusChange={action('onStatusChange')}
    />

);