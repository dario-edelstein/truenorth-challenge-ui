import React, { useEffect } from 'react'

import axios from 'axios'
import Task from './Task';

function Taskslist({quantity}) {
    const [tasks, setTasks] = React.useState(null);
    
    useEffect(() => {
        axios.get(`//localhost:3002/tasks?quantity=${quantity > 3 ? quantity : 3 }`).then((response) =>
            setTasks(response.data)
        );
    }, [quantity])

    return (
        <div className='flex flex-col flex-wrap items-center justify-center m-2 sm:flex-row w-full'>
            {tasks && tasks.map((task, index) => <Task
                key={task.uuid}
                task={task}
                index={index}></Task>)}
        </div>
    )
}

export default Taskslist