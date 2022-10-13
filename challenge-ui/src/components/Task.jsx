import React from 'react'
import useDialog from '../hooks/useDialog'
import Dialog from './Dialog';
import axios from 'axios'

function Task({ task, index }) {
    const { isShowing, toggle } = useDialog();

    const completeTaskHandler = (taskId) => {
        axios.put('//localhost:3002/tasks', { taskId })
            .then(response => console.log(response.data));
    }

    return (<>
        <div className='flex flex-col p-3 m-3 w-3/5 sm:w-1/5 h-20 bg-sky-600 cursor-pointer shadow-md rounded-lg hover:bg-sky-800 hover:scale-110 duration-500 ease-in-out active:bg-sky-700'
            onClick={toggle}>
            <p className='truncate'>
                task #{index + 1}
            </p>
            <p className='truncate'>
                {task.title}
            </p>
        </div>
        <Dialog
            isShowing={isShowing}
            hide={toggle}
            task={{ index, ...task }}
            completeTask={completeTaskHandler}
        />
    </>
    )
}

export default Task