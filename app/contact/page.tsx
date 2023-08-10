import React from 'react'
import Image from 'next/image'

export default function Contact() {
    return (
        <div >
            <div className="flex flex-col justify-center lg:flex-row mt-10">
                <div className="grid flex-grow  max-w-lg card rounded-box place-items-center ">
                    <div className='text-[#5A1EBC] text-6xl font-semibold'>
                        <p>Hurry up, </p>
                        <p>contact me</p>
                        <p className='text-[#976609]'>now!</p>
                    </div>

                    <div className='flex flex-row justify-left'>
                        <div className='flex gap-4'>
                            <ul className='gap-4 items-start font-semibold text-xl text-[#25232B]'>
                                <li className='gap-4'>
                                    <div className='flex gap-2 mt-8'>
                                        <Image src={'/icon_call.svg'} alt='' width={40} height={40} />
                                        <a href=''><span>Call</span></a>
                                    </div>
                                </li>
                                <li>
                                    <div className='flex  gap-2 mt-8'>
                                        <Image title='sa2762@njit.edu' src={'/icon_send.svg'} alt='' width={40} height={40} />
                                        <a href='mailto:sa2762@njit.edu'><span>Email</span></a>
                                    </div>
                                </li>
                                <li>
                                    <div className='flex  gap-2 mt-8'>

                                        <Image src={'/icon_facebook.svg'} alt='' width={40} height={40} />
                                        <a href=''><span>Facebook</span></a>
                                    </div>
                                </li>
                                <li>
                                    <div className='flex  gap-2 mt-8'>
                                        <Image src={'/icon_twitter.svg'} alt='' width={40} height={40} />
                                        <a href=''><span>Twitter</span></a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='ml-8 mt-12 '>
                            <a title='sa2762@njit.edu'
                                className="inline-block rounded  bg-[#1F5DFC] px-12 py-3 text-md font-semibold text-[#D4D4B8]  hover:border-indigo-600 focus:outline-none focus:ring active:border-indigo-500"
                                href='mailto:sa2762@njit.edu'
                            >
                                Hire me!
                            </a>
                        </div>
                    </div>
                </div>

                <div className="grid flex-grow card rounded-box place-items-center max-w-screen-sm ml-3 mt-4">
                    <div className='card rounded-box  text-[#FFFFFF] text-2xl font-semibold max-w-lg pt-10 pb-10 pl-5 pr-5'>
                        <Image src={'/contact.png'} alt='' width={500} height={500} />
                    </div>

                </div>
            </div>   
         </div>
    )
}

