import React from "react";

function Home(){

    const sociails =["logo-twitter","logo-linkedin", "logo-github","logo-instagram"]
   
const icons = sociails.map(icons =>{
    return(
        <ion-icon name={icons}></ion-icon>
    )
})

    return(

        <div id="/" className="text-gray-50 p-4 mb-20 scroll-mt-24 mt-32">
            <h3 className="text-2xl">Hello there,</h3>
            <h1 className="text-4xl mb-4 font-bold text-justify tracking-tight ">I'm Nwosu Joseph.<br className="w-full" />A Frontend Developer</h1>
            <p className="text-xl text-gray-50 font-thin text-md w-full tracking-tighter text-justify mb-5 ">I build and create proficient website,
                  helping buisnesses and individuals 
                  implement manual processes into computerised refined Websites.</p>
      <a className="space-x-10  text-3xl" href=" " >{icons}</a>
        </div>
    )
}
export default Home;