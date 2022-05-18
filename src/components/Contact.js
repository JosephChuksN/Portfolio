import React from "react";


function Contact(){

    return(
        <div className="lg:mt-52">
             <h1 className="text-center lg:mb-20 text-3xl text-gray-50 mb-7">CONTACT ME</h1>
        <div id="ContactSec" className=" lg:grid lg:w-3/4 lg:mx-auto lg:gap-14  lg:grid-cols-2 text-gray-50 scroll-mt-24 w-full p-4 mb-20">
           
            <p className=" mb-7 w-full lg:text-2xl">Interested in working together? Reach out to me through the contact form below. Feel 
            free to reach out to me through my social media handles or send a mail to :
             <a className="text-[#264de4]" href="mailto:hellonwosu@gmail.com">  hellonwosu@gmail.com</a></p>
         <div className="w-full px-3 py-10 bg-blue-400/50 rounded">
             <form className="grid gap-5 ">
                 <input className="bg-gray-800 p-2 rounded outline-none" type="type" placeholder="Fullname"  />
                 <input  className="bg-gray-800 p-2 rounded outline-none" type="email" placeholder="email" />
                 <textarea  className="bg-gray-800 p-2 rounded ">Your message</textarea>
                 <button className="p-2 bg-[#264de4] w-full mx-auto rounded">Submit</button>
             </form>
         </div>
        </div>
        </div>
    )
}
export default Contact;