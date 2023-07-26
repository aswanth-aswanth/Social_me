import React from 'react'

function Profile() {
    return (
        <div className='bg-white rounded-3xl ml-[130px] mr-[10px] overflow-hidden max-w-[810px] mt-[82px] min-h-[340px]'>
            <div className=' bg-[#EEEEEE] h-[180px] w-full'></div>
            <div className='relative w-[100%]'>
                <div className='w-[120px] h-[120px] border-2 absolute top-[-42px] left-0 right-0 mx-auto bg-white rounded-full flex justify-center items-center object-cover'></div>
                <p className='pt-[82px] text-center'>Debby willioms</p>
                <div className='flex justify-around pt-4 text-center pb-4'>
                    <p className='w-[72px]'>33 <br />posts</p>
                    <p className='w-[72px]'>22.k <br />followers</p>
                    <p className='w-[72px]'>2.2k <br />followings</p>
                </div>
            </div>
        </div>
    )
}

export default Profile
