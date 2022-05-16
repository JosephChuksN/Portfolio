import {React, useState} from "react";


function Navbar(){
    const [show, setShow] = useState(false)

    function handleToggle(){
         
     setShow(show => !show)
   
    } 
   
   const links = [
         { name: "Home", link: "/" },
         { name: "About", link: "/" },
         { name: "Skills", link: "/" },
         { name: "Projects", link: "/" },
         { name: "Contact", link: "/" }
   ]

    return(
        <nav className={` bg-gray-900  px-4 py-1.5 ${show ? "shadow-0" : "shadow-md"} top-0 left-0 right-0 fixed `}>
        <div className="p-2 lg:flex items-center z-[-1] justify-between space-y-3">
         <h1 className="text-4xl text-gray-50"> 
               JOSEPH
         </h1>
         <div className='text-4xl absolute  cursor-pointer  p-1 right-8 top-0.5 text-gray-50 lg:hidden'  onClick={handleToggle}>
         <ion-icon name={show ? "close" : "menu"} ></ion-icon>
         </div>
         <ul className={`lg:items-center   lg:justify-center lg:shadow-0 lg:z-auto lg:pb-0 lg:w-auto lg:static  lg:flex bg-gray-900/95 w-full left-0 lg:justify-center  z-[-1]  absolute lg:space-x-10 pb-6 pt-4 space-y-4 ${show ? "top-10  shadow-md" : "top-[-490px]"} duration-300 transition-all ease-in`}>
           {
             links.map(tags => (
               <li className=' text-2xl text-gray-50 hover:text-gray-500 hover:duration-500 ml-5 text-left'><a key={tags.name} href={tags.link}>{tags.name}</a></li>
             ))
           }
         </ul>
        </div>
         
      </nav>
    )
}
export default Navbar;