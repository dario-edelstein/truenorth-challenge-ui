import React from 'react'
import {Link} from 'react-router-dom'

function Errorpage() {
    return (
        <>
            <section className="flex items-center h-full p-16 ">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-2xl mb-6 font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                        <Link to={'/tasks'} className="px-8 py-3 text-gray-600 font-semibold hover:font-bold hover:text-blue-700 ease-in-out duration-200 cursor-pointer ">Back to homepage</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Errorpage;