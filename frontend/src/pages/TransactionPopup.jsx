import React, { useState } from 'react'

const TransactionPopup = ({ type, onClose }) => {

    const [amount,setAmount]=useState(0)

    const handleSubmit=()=>{

    }
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        <div className='card bg-white p-2'>
        
        <h2 className='text-center'>{type=='withdraw'?'Withdraw':'Deposite'}</h2>
        <form onSubmit={handleSubmit}>
            <input type="Number"
                className='border p-2'

                value={amount}
                onChange={(e)=>setAmount(e.target.value)}
            />
            <div className='flex justify-end '>
                <button className='bg-red-500 rounded m-2 p-2' onClick={onClose}>cancle</button>
                <button className='bg-green-500 rounded m-2 p-2'>{type}</button>
            </div>
        </form>
        </div>
        

    </div>
  )
}

export default TransactionPopup