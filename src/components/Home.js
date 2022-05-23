import React from "react";

function Home(){

    const sociails =[
            
        { name: "logo-twitter", link: "https://twitter.com/JosephChuksN" },
        { name: "logo-linkedin", link: "https://linkedin.com/in/nwosujosephchuks" },
        { name: "logo-github", link: "https://github.com/josephchuksn" },
        { name: "logo-instagram", link: "http://instagram.com/malehsha" },
        
        
        ]
          
 

    return(

        <div id="/" className="md:w-3/4 md:mx-auto text-gray-50 p-4 mb-20 scroll-mt-24 mt-32 lg:my-56 lg:mx-52">
            <h3 className="text-2xl lg:text-3xl">Hello there,</h3>
            <h1 className="text-4xl mb-4 font-bold  tracking-tight lg:text-5xl">I'm Nwosu Joseph.<br className="w-full" /><span className="text-3xl lg:text-4xl">A Frontend Developer</span> </h1>
            <p className=" text-gray-50 font-normal text-md w-full tracking-tighter mb-5 lg:text-2xl lg:w-3/4 ">I build and create proficient website,
                  helping buisnesses and individuals 
                  implement manual processes into computerised refined Websites.</p>
                  <span className="space-x-10 text-xl lg:text-3xl">
             {
                 sociails.map(icons =>(
             <a className="space-x-10 z-[-1] text-center" key={icons.name} target="_blank" href={icons.link}><ion-icon key={icons.name} name={icons.name}></ion-icon></a>
         
                 ))
                 }
         </span>
        </div>
    )
}
export default Home;