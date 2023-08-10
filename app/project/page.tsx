import Image from 'next/image'
import React from 'react'

export default function Project() {
    return (
        <div className="flex flex-col justify-center lg:flex-row mt-10">
            <div className="grid flex-grow  max-w-lg card rounded-box place-items-center ">
                <div className='text-[#5A1EBC] text-6xl font-semibold'>
                    <p><span className='text-[#BC800C]'>Projects</span> working</p>
                    <p>through</p>
                </div>
                <div>
                    <Image src={'/123.svg'} alt='' width={'400'} height={'600'} />
                </div>
            </div>

            <div className="grid flex-grow card rounded-box place-items-center max-w-screen-sm ml-3 mt-4">
                <div className='card rounded-box bg-[#354A63] text-[#FFFFFF] text-2xl font-semibold max-w-lg pt-10 pb-10 pl-5 pr-5'>
                <p>Teaching experience of Masters of IT students and Bachelors of Computer Science</p>
                </div>
                <div className='card rounded-box mt-3 bg-[#7B5050D1] text-[#FFFFFF] text-2xl font-semibold max-w-lg pt-10 pb-10 pl-5 pr-5'>
                <p>Experience of Banking as a Teller </p>
                </div>
            </div>
        </div>
    )
}
