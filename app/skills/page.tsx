import React from 'react'
import Image from 'next/image'

export default function Skills() {
    return (
      
        <div className="flex justify-center  mt-20">
            <div className="card rounded-box text-center items-center w-1/3 mr-1/5 ">
                <div className='card text-[#744db5] w-3/4' style={{ backgroundColor: '#ad8fde' }}>
                    <p className=' m-6 text-2xl'>Python,  C/C++</p>
                </div>
                {/* <div className='card text-[#744db5] mt-16 w-3/4' style={{ backgroundColor: '#ad8fde' }}>
                    <p className=' m-6 text-2xl'>AWS,  Hadoop, Spark, SAP HANA </p>
                </div> */}
                <div className='card  text-[#744db5] mt-16 w-3/4' style={{ backgroundColor: '#ad8fde' }}>
                    <p className=' m-6 text-2xl'>MySql, Oracle </p>
                </div>
                <div className='card text-[#744db5] mt-16 w-3/4' style={{ backgroundColor: '#ad8fde' }}>
                    <p className=' m-6 text-2xl'>Tableau/Power BI</p>
                </div>
            </div>
            <div className=' ml-6'>
                <div className='text-5xl font-bold text-[#5A1EBC] ml-16'>
                    <p>How many</p>
                    <p className=' mt-4'><span className='text-[#E59C0F]'>Skills</span> can be </p>
                    <p className=' mt-4'>mastered</p>
                </div>
                <div className='flex mt-8'>
                    <Image src={"Rectangle22.svg"} alt=""  width={400} height={300}/>

                </div>
            </div>
        </div>
    )
}
