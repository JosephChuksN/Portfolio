import React from "react"


function Project(props){



    return(
         
        <div className="lg:mx-auto lg:grid lg:grid-cols-2 lg:gap-10 lg:w-3/4 m-4 p-2  rounded lg:space-y-10 bg-gray-900 text-gray-50 lg:shadow shadow-black shadow-lg">
            <img src={props.details.imgg} alt="project-img"  className="w-full rounded lg" />
            <div className="lg:left-5 lg:shadow-black lg:shadow-lg lg:rounded lg:space-y-8 lg:p-4">
            <h1 className="text-2xl font-bold">{props.details.heading}</h1>
            <p className="">{props.details.writeup}</p>
            <div className="grid grid-cols-2 gap-4 text-center p-3 my-3  ">
            <a className="p-1.5 rounded border border-gray-50 hover:bg-gray-100/50 hover:duration-500" href={props.details.source} target="_blank">SOURCE CODE</a>
            <a className="p-1.5 rounded border border-gray-50 hover:bg-gray-100/50 hover:duration-500" href={props.details.link}  target="_blank">DEMO</a>
            </div>
           
            </div>
        </div>
    )
}
export default Project; 