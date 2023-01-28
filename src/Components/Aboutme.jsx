import React from 'react'

const Aboutme = () => {
  return (
    <section id="skills">

      <div className='flex justify-center items-center homenav pt-[7%] flex-col'>
        <h1 className='text-[35px] lg:text-[50px] bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 mt-5 text-center'><b>About me</b> </h1><br />
        <div className='flex justify-center items-center h-[50%]  flex-col '>
          <div className='flex justify-center items-center flex-col lg:flex-row'>

            <div className="flex justify-center items-center  flex-col w-[90%] lg:w-[50%] about1 ">

              <h3 className='text-white'> My name is Arnab Singha</h3><br />
              <p className='text-white'>This is my litte corner on the Internet I'm a web developer by profeSSion, but also a Gamer and Painter i enjoy creating things that focus on usefulness and elegance.</p>
            </div>

            <div className='flex justify-center items-center w-[30%] h-[50%] '>
            <img class="mx-auto w-full md:w-4/5 transform rotate2 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6 homeimg1" alt='' height="300" />
                </div>

            </div>


            <div className='flex justify-center items-center  flex-col aboutmebox mt-[5%] p-2 mb-11'>
              <h1 className='text-[35px] lg:text-[50px] bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 mt-5'>What I do </h1><br />
              <h3 className='text-[35px] text-green-500'>I am from India and currently living in West Bengal.</h3>
              <p className='text-[20px] text-white'>I am doing Master's in Computer Application and i will graduate in the year 2023.I am WEB designer and currently Learning.</p>
              <p className='text-[15px] lg:text-[20px] bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 mt-5'>I am a web developer with a strong skill set in HTML, CSS, Javascript, React, PHP, MySQL, Tailwind, Bootstrap, Firebase, and C/C++. I am highly motivated and passionate about web development and constantly seek to improve my skills and stay current with industry trends. My ability to learn quickly and adapt to new technologies makes me a valuable asset to any team. I am committed to delivering high-quality, user-centered web solutions ...</p>
            </div>
          </div>

          <div className='flex justify-center items-center h-[50%]'>

          </div>

        </div>

    </section>
  )
}

export default Aboutme
