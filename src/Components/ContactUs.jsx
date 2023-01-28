import React from 'react'

const ContactUs = () => {
  return (
    <div>

                   
<section id="cont" class="contact homenav" >
    <div class="content bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 p-4 text-[40px]">
        <h2>Let's Work together!</h2>
       
    </div>
    <div class="container">
        <div class="contentinfo">
            <div class="box">
                <div class="icon"><i class="fas fa-4x fa-address-card text-red-200 pt-10"></i></div>
                <div class="text bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 p-4 ml-[20px]">
                    <h3>Address.</h3>
                    <p>Raniganj,West Bengal,India,713362</p>
                </div>
            </div>
            <div class="box">
                <div class="icon"><i class="fas  fa-4x fa-phone-square-alt text-red-200 pt-10"></i></div>
                <div class="text bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 p-4 ml-[62px]">
                    <h3>Phone</h3>
                    <p>7908502755</p>
                </div>
            </div>
            <div class="box">
                <div class="icon"><i class="fas fa-4x fa-envelope-open text-red-200 pt-10 "></i></div>
                <div class="text bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 p-4 ml-[20px]">
                    <h3>Email</h3>
                    <p>Arnabsingha9004@gmail.com</p>
                </div>
            </div>
        </div>
        <div class="contactform">
            <form>
                <h2>Send Massage</h2>
                <div class="inputext">
                    <input type="text" name="" required="required"/>
                    <span>full Name</span>
                </div>
                <div class="inputext">
                    <input type="text" name="" required="required"/>
                    <span>Email</span>
                </div>
                <div class="inputext">
                    <textarea required="required"></textarea>
                    <span>write Your Massage</span>
                </div>
                <button
                class="mb-5 bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-4 px-10 mt-3 rounded-full focus:ring transform transition duration-300 ease-in-out"
                type="button"
              >
                Contact me → 📩
              </button>
            </form>
        </div>
    </div>
</section>
      
    </div>
  )
}

export default ContactUs
