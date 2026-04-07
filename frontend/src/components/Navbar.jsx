import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full flex justify-around bg-slate-900 h-10 items-center text-white '>
      <div className="logo font-bold text-xl ">
        <span className='text-green-500 font-bold'>&lt;</span>
        Pass
        <span className='text-green-500 font-bold'>OP/&gt;</span>
        </div>
      <button className='bg-green-900 rounded-full cursor-pointer hover:bg-green-700 border border-white'>
        <img className='w-20 py-2 px-3 invert' src="/icons/github.svg" alt="github logo" />
      </button>
    </nav>
  )
}

export default Navbar