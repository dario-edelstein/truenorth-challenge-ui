import React, { useEffect } from 'react'
import axios from 'axios'
import Task from './Task';

function Taskslist() {
    const [tasks, setTasks] = React.useState(null);
    useEffect(() => {
        axios.get(`//localhost:3002/tasks?quantity=${15}`).then((response) =>
            setTasks(response.data)
        );

    }, [])

    return (
        <div className='flex flex-col flex-wrap items-center m-2 sm:flex-row '>
            {tasks && tasks.map((task, index) => <Task
                key={task.uuid}
                task={task}
                index={index}></Task>)}
        </div>
    )
}

export default Taskslist