import React, { useRef } from 'react'
import Image from 'next/image'

function Modal() {
  const modalRef = useRef();

  const closeModal = e => {
    if (modalRef.current === e.target) {
      console.log('Modal Close')
    }
  };

  return (
    // Background
    <section onClick={closeModal} ref={modalRef} className='w-full h-screen fixed z-[60] text-gray-800 bg-black bg-opacity-30 flex justify-center items-center'>
      {/* card */}
        <div className='bg-white shadow-md rounded-xl w-full md:w-5/12'>
          <div className='flex p-2 border-b-2 z-[70]'>
            <button onClick={() => console.log('close clicked')} className='hover:bg-gray-100 rounded-full px-3 py-1 font-semibold'>X</button>
            <h1 className='font-bold mx-auto'>Log in or sign up</h1>
          </div>
          {/* continue with google */}
          <div className='my-5 mx-6'>
            <button className='border w-full border-black rounded-md hover:bg-gray-100'>
              <div className='flex mx-5 py-2'>
                  <Image src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=" alt="Google Icon" objectFit='contain' height="12px" width="20px"/>
                <div className='mx-auto text-md'>Continue With Google</div>
              </div>
            </button>
          </div>
        </div>
        
    </section>
  )
}

export default Modal;

