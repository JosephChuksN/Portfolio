import React from "react";

function Footer(){
const sociails =["logo-twitter","logo-linkedin", "logo-github","logo-instagram"]
   
const icons = sociails.map(icons =>{
    return(
        <ion-icon name={icons}></ion-icon>
    )
})


    return(
        <div className="bg-black/50 flex w-full flex-col gap-5  text-gray-50 p-5 space-x-4 ">      
         <div className=" w-full text-center text-3xl">
           <a className="space-x-10 text-center" href=" ">{icons}</a>
            </div>
            <p className="w-full text-center text-gray-500 mx-auto">&copy; Copyright 2022</p>
        </div>
    )
}
export default Footer;