import React from 'react'

const Footer = () => {
    return (
        <div className='w-full bg-slate-800 text-white fixed bottom-0'>
            <div className="logo font-bold text-xl flex justify-center items-center">
                <span className='text-green-500 font-bold'>&lt;</span>
                Pass
                <span className='text-green-500 font-bold'>OP/&gt;</span>
            </div>
            <div className='flex justify-center items-center text-xs'>www.passwordManager.com</div>
        </div>
    )
}

export default Footer
