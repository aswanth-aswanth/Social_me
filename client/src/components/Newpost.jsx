import React from 'react'

function Newpost() {
    return (
        <>
        <div>
            <h4 className='text-xl mb-4'>New post</h4>
            <div className='bg-white min-h-[200px] mx-3 p-6 rounded-2xl'>
                <textarea className='border  max-h-[150px] focus:outline-gray-200 rounded-2xl w-full p-10' name="" id="" placeholder='Your message here' cols="30" rows="10"></textarea>
                <button className='w-full text-center border border-sky-500 rounded-lg py-1 mt-4 text-sky-500 hover:border-red-500 hover:text-red-500'>Publish</button>
            </div>
        </div>
        </>
    )
}

export default Newpost
