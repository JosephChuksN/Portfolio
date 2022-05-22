import {React, useState} from "react";


function Navbar(){
    const [show, setShow] = useState(false)

    function handleToggle(){
         
     setShow(show => !show)
   
    } 
   
   const links = [
         { name: "Home", link: "#/" },
         { name: "About", link: "#AboutSec" },
         { name: "Skills", link: "#SkillSec" },
         { name: "Projects", link: "#ProjectSec" },
         { name: "Contact", link: "#ContactSec" }
   ]

    return(
        <nav className={` bg-gray-900 z-10 px-4 py-1.5 ${show ? "shadow-0" : "shadow-md"} top-0 left-0 right-0 fixed `} >
        <div className="p-2 lg:flex items-center  justify-between space-y-3">
         <h1 className="text-2xl lg:text-4xl text-blue-400/75"> 
               JOSEPH
         </h1>
         <div className='text-4xl absolute  cursor-pointer  p-1 right-8 top-0.5 text-gray-50 lg:hidden'  onClick={handleToggle}>
         <ion-icon name={show ? "close" : "menu"} ></ion-icon>
         </div>
         <ul onClick={handleToggle} className={`lg:z-auto lg:space-x-12  lg:justify-center  lg:w-auto lg:static lg:p-2 lg:space-y-0 lg:flex bg-gray-900/95 w-full left-0  z-[-1]  absolute  pb-6 pt-4 space-y-4 ${show ? "top-10  shadow-md" : "top-[-490px]"} duration-300 delay-150 transition-all ease-in`}>
           {
             links.map(tags => (
               <li className='  text-xl text-gray-50 hover:text-blue-400/75 hover:duration-300 ml-5 text-left'><a  key={tags.name} href={tags.link}>{tags.name}</a></li>
             ))
           }
         </ul>
        </div>
         
      </nav>
    )
}
export default Navbar;