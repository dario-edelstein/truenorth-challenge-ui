import React from 'react'
import ReactDOM from 'react-dom';

function Dialog({ isShowing, hide, task, completeTask }) {

    const onComplete = () => {
        completeTask(task.uuid)
    };

    return (
        isShowing ? ReactDOM.createPortal(
            <>
                <div className='fixed top-0 left-0 w-screen h-screen z-[1040] bg-slate-400 opacity-50' />
                <div className="fixed top-0 left-0 z-[1050] h-full w-full overflow-hidden outline-0" onClick={hide}>
                    <div className="bg-zinc-50 relative my-7 mx-auto rounded max-w-lg p-8 z-[100] shadow-md">
                        <div className="flex justify-end">
                            <button className="text-2xl font-bold leading-4 cursor-pointer border-none" onClick={hide}>
                                <span>&times;</span>
                            </button>
                        </div>
                        <p className='my-4 p-2'>
                            Task #{task.index + 1}
                        </p>
                        <p className='my-4 p-2'>
                            UUID: {task.uuid}
                        </p>
                        <p className='my-4 p-2'>
                            Title: {task.title}
                        </p>
                        <div className='flex justify-end'>
                            <button className='mx-2 px-4 py-2 bg-green-600 rounded-md shadow-sm hover:bg-green-700 hover:scale-105 ease-in-out duration-300' onClick={onComplete}>
                                Complete
                            </button>
                            <button className='ml-2 px-4 py-2 bg-red-600 rounded-md shadow-md hover:bg-red-700 hover:scale-105 ease-in-out duration-300' onClick={hide}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </>, document.body
        ) : null
    )
}

export default Dialog;