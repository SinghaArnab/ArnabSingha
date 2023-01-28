import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className='flex justify-between items-center h-[50px] p-10 border-t border-red border-dashed flex-col lg:flex-row'>
            <div className='text-[20px] font-semibold text-white'><i class="fa-solid fa-house-lock text-[30px] text-green-300 hover:text-green-400 hover:scale-110 transition ease-in-out"></i> ©️ 2023 Arnab Singha . All Rights Reserved .</div>
                
            <div className='flex justify-end items-center gap-6 flex-col lg:flex-row'> 
            <div>
            <h1 className='text-[20px] font-medium text-white'>You can follow me On ➡️</h1>
            </div>
            <div className='flex justify-center items-center flex-row gap-6 pb-6 lg:pb-0'>
            <i class="fa-brands fa-instagram text-[20px] lg:text-[30px] text-pink-300 hover:text-pink-400 hover:scale-110 transition ease-in-out"></i>
            <i class="fa-brands fa-facebook text-[20px] lg:text-[30px] text-blue-500 hover:text-blue-700 hover:scale-110 transition ease-in-out"></i>
            <i class="fa-brands fa-github text-[20px] lg:text-[30px] text-slate-600 hover:text-slate-900 hover:scale-110 transition ease-in-out"></i>
            <i class="fa-brands fa-linkedin text-[20px] lg:text-[30px] text-blue-300 hover:text-blue-400 hover:scale-110 transition ease-in-out"></i>
            </div>
            </div>
            </footer>

        </div>
    )
}

export default Footer
