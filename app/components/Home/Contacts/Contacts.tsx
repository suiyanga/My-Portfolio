import React from 'react'
import Heading from '../../Helper/Heading';

const Contacts = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
        <Heading 
        headingPrimary="Get in Touch" 
        headingSub="Contact" 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] mt-[4rem] items-center w-[80%] m-auto">
            <div>
                <p className="text-[17px] text-white opacity-75"> Get In Touch</p>
                <h1 className="mt-[2rem] mb-[2rem] text-[30px] sm:text-[25px] text-purple-400 font-bold">
                    +254713341586
                </h1>
                <h1 className="mt-[2rem] mb-[2rem] text-[30px] sm:text-[25px] text-purple-400 font-bold">
                    augustkinya@gmail.com
                </h1>
            </div>
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem] items-center">
                    <input 
                    type="text" 
                    placeholder="Name" 
                    className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4" 
                    />
                    <input 
                    type="email" 
                    placeholder="Email" 
                    className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4" 
                    />
                </div>
                <input 
                type="text" 
                placeholder="Subject" 
                className="py-[0.7rem] mt-[1.5rem] w-full mb-[1.5rem] outline-none text-white bg-gray-800 rounded-md px-4" 
                />
                <textarea 
                rows={5} 
                placeholder="Message" 
                className="py-[0.7rem] w-full mb-[1.5rem] outline-none text-white bg-gray-800 rounded-md px-4" 
                ></textarea>
                <button className="py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-purple-400
                 hover:bg-purple-500 rounded-md px-4"> 
                    Submit 
                </button>
            </div>
        </div>
    </div>
  )
}

export default Contacts;