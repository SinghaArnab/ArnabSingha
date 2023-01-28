import React from 'react'

const HomeFrag = () => {
  return (
    <section id="Home" >
    <div className='h-auto lg:h-[90vh]'>

      <div class="pt-[40%] lg:pt-[15%] pl-[0%] lg:pl-[5%] md:pt-25 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div class="flex flex-col w-[95%] xl:w-[40%] justify-center lg:items-start overflow-y-hidden lg:p-10">
          <h1 class=" text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left mb-5 ">
          HI There 👋  I'M
            <h3 class="text-[35px] lg:text-[50px] bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 mt-5">
            ARNAB SINGHA!   &nbsp;&nbsp;
            </h3> <br/>
            <span className='text-[35px] text-green-500'> DESIGNER + DEVELOPER 🧑‍💻 </span>
          </h1>
          <p class="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
          I am  Design minded Web Developer <br /> based in West Bengal  ,India.
          </p>


            <div class="flex items-center justify-between pt-4">
              <button
                class="mb-5 bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-4 px-6 rounded-full focus:ring transform transition duration-300 ease-in-out"
                type="button"
              >
                Hire Me
              </button>
            </div>
        </div>

        <div class="w-full xl:w-[35%] h-[500px] p-8 overflow-hidden lg:overflow-y-visible  lg:ml-[10%]  lg:pb-[2%] ">
        <video width="820" height="940" controls autoplay>
                <source src={"./video/AranbPortfolio.mp4"} type="video/mp4"/>
                    Your browser does not support the video tag.
                  </video>
        </div>
      </div>

    </div>
  </section>
  )
}

export default HomeFrag
