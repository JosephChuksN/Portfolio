import React from "react";

function Footer(){
const sociails =[
            
{ name: "logo-twitter", link: "https://twitter.com/JosephChuksN" },
{ name: "logo-linkedin", link: "https://linkedin.com/in/nwosujosephchuks" },
{ name: "logo-github", link: "https://github.com/josephchuksn" },
{ name: "logo-instagram", link: "http://instagram.com/malehsha" },


]
  


    return(
        <div className="bg-black/50 flex w-full flex-col gap-5  text-gray-50 p-5 space-x-4 ">      
         <div className=" w-full  text-center text-3xl">
         <span className="space-x-10">
             {
                 sociails.map(icons =>(
             <a className="space-x-10 text-center" key={icons.name} target="_blank" rel="noreferrer" href={icons.link}><ion-icon key={icons.name} name={icons.name}></ion-icon></a>
         
                 ))
                 }
         </span>
         <p className="w-full lg:w-3/4 text-center text-[0.8rem] text-gray-500 mx-auto">&copy; Copyright 2022</p>
            </div>
           
        </div>
    )
}
export default Footer;