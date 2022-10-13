import React from 'react'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

function QuantityHandler() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [qty, setQty] = useState('');
    
    const changeQuantity = () => {
        setSearchParams(`quantity=${qty}`);
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            changeQuantity();
        }
    }

    return (
        <div className='flex flex-wrap flex-col gap-6 justify-center items-center my-4 sm:flex-row w-full'>
            <input className='w-2/5 placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm sm:w-1/5 max-w-[148px]'
                value={qty} onKeyUp={handleKeyPress} onChange={e => setQty(e.target.value)} type="number" placeholder='Quantity' />
            <button className=' w-2/5 mx-2 px-4 py-2 bg-slate-600 text-slate-50 rounded-md shadow-sm hover:bg-slate-700 hover:scale-105 ease-in-out duration-300 sm:w-1/5 max-w-[148px]'
                onClick={changeQuantity}>Generate Tasks</button>
        </div>


    )
}

export default QuantityHandler