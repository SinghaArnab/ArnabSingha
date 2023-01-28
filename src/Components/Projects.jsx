import React from 'react'
import { useState } from 'react'

const Projects = () => {
    const [projectState,setProjects]=useState(false)
    return (
        <section id="pro">
            <div className={`flex justify-center items-center h-[auto] ${projectState===true ? 'lg:min-h-[103.7vh]':'lg:min-h-[145vh]'} flex-col`}>
                <div className='flex justify-start items-center h-[40%] flex-col w-[100%]'>
                    <div className='text-center'>
                        <h1 className='text-[35px] lg:text-[50px] bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 mt-5 text-center font-semibold'>Projects</h1>
                    </div>

                    <h3 className='text-[30px] text-green-500'>There are some websites!</h3>
                    <p className='text-[25px] text-green-500'>Go and Check it Out!</p>

                    <div className='w-[90%] lg:w-[65%] h-[60px] bg-slate-400 rounded-full flex justify-center items-center flex-wrap my-6 cursor-pointer'>

                        <div className='w-[50%] h-full mb-5 bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-4 px-6 rounded-l-full focus:ring transform transition duration-300 ease-in-out ' onClick={()=>setProjects(false)}>

                            React + Firebase
                        </div>
                        <div className='w-[50%] h-full mb-5 bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-4 px-6 rounded-r-full focus:ring transform transition duration-300 ease-in-out' onClick={()=>setProjects(true)}>

                            PHP + Mysql

                        </div>

                    </div>

                </div>

                <div className='flex justify-center items-center flex-wrap gap-11 '>

                      { 
                        projectState===false ?
                        <>
                         <div className="w-[100%] lg:w-[400px] h-[250px] ">
                            <img src="./img/Weatherapp.jpg" alt="..." className="shadow rounded-[25px] ml-[10%] w-[80%] lg:w-[400px] h-[250px] align-middle border-none hover:scale-110 transition ease-in-out" />
                        </div> 

                        <div className="w-[100%] lg:w-[400px] h-[250px] ">
                            <img src="./img/reactShopping.jpg" alt="..." className="shadow rounded-[25px]  ml-[10%] w-[80%] lg:w-[400px] h-[250px] align-middle border-none hover:scale-110 transition ease-in-out" />
                        </div> 

                        <div className="w-[100%] lg:w-[400px] h-[250px] ">
                            <img src="./img/Quiz.jpg" alt="..." className="shadow rounded-[25px]  ml-[10%] w-[80%] lg:w-[400px] h-[250px] align-middle border-none hover:scale-110 transition ease-in-out" />
                        </div> 

                        <div className="w-[100%] lg:w-[400px] h-[250px] ">
                            <img src="./img/radomUser.jpg" alt="..." className="shadow rounded-[25px]  ml-[10%] w-[80%] lg:w-[400px] h-[250px] align-middle border-none hover:scale-110 transition ease-in-out" />
                        </div> 

                        <div className="w-[100%] lg:w-[400px] h-[250px] ">
                            <img src="./img/BookStore.jpg" alt="..." className="shadow rounded-[25px]  ml-[10%] w-[80%] lg:w-[400px] h-[250px] align-middle border-none hover:scale-110 transition ease-in-out" />
                        </div> 

                        <div className="w-[100%] lg:w-[400px] h-[250px] ">
                            <img src="./img/Firecurd.jpg" alt="..." className="shadow rounded-[25px]  ml-[10%] w-[80%] lg:w-[400px] h-[250px] align-middle border-none hover:scale-110 transition ease-in-out" />
                        </div>
                        
                        </>

                        :

                        <>
                         <div className="w-[100%] lg:w-[400px] h-[250px] ">
                            <img src="./img/Codeblog.jpg" alt="..." className="shadow rounded-[25px]  ml-[10%] w-[80%] lg:w-[400px] h-[250px] align-middle border-none hover:scale-110 transition ease-in-out" />
                        </div> 

                        <div className="w-[100%] lg:w-[400px] h-[250px] ">
                            <img src="./img/Shoppingsite.jpg" alt="..." className="shadow rounded-[25px]  ml-[10%] w-[80%] lg:w-[400px] h-[250px] align-middle border-none hover:scale-110 transition ease-in-out" />
                        </div> 

                        <div className="w-[100%] lg:w-[400px] h-[250px] ">
                            <img src="./img/Crm2.jpg" alt="..." className="shadow rounded-[25px]  ml-[10%] w-[80%] lg:w-[400px] h-[250px] align-middle border-none hover:scale-110 transition ease-in-out" />
                        </div> 

                        </>
                         }




            </div>

        </div>
        </section>

    )
}

export default Projects
