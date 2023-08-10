import React from 'react'
import Image from 'next/image'

export default function WorkingExperience() {
    return (

        <div className="flex flex-col justify-center lg:flex-row">
            <div className="grid grid-cols-1 grid-flow-col grid-rows-3 gap-1">
                <div className="flex flex-col items-center justify-center text-6xl font-semibold text-[#5A1EBC]">
                    <p>My <span className='text-[#C5860C]'>Working Experience</span></p>
                </div>
                <div className="grid card rounded-box w-full mx-auto my-auto text-center bg-[#354A63] text-white">
                    <div className='p-10'>
                        <p className=' font-semibold text-6xl'>Post Graduate Government College Sector-11,Chandigarh,India</p>
                        <p className=' text-2xl font-semibold mt-8'>Assistant Professor 07/2008 - 12/2022</p>
                    </div>
                </div>
                <div className="grid card rounded-box w-full mx-auto mt-8 text-center bg-[#787878] text-white">
                    <div className=' p-10'>
                        <p className=' font-semibold text-6xl'>IDBI BANK Ltd</p>
                        <p className=' text-2xl font-semibold mt-8'>Personal Banker</p>
                </div>
            </div>
            <div className="grid flex-grow my-auto max-w-xl card rounded-box place-items-start ">
                <div className=' mt-16 ml-12'>
                    <Image src={'/working_experience.png'} alt='' width={'400'} height={'600'} />
                </div>
            </div>
        </div>
    </div>
    )
}
