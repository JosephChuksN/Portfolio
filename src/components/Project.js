import React from "react"


function Project(props){



    return(
         
        <div className=" lg:w-1/2 lg:ml-28 m-4 p-2  rounded lg:absolute space-y-10 bg-gray-900 text-gray-50 shadow-black shadow-lg">
            <img src={props.details.imgg} alt="project-img"  className="w-full rounded lg:hidden" />
            <div className="lg:left-5">
            <h1 className="text-2xl font-bold">{props.details.heading}</h1>
            <p className="">{props.details.writeup}</p>
            <div className="grid grid-cols-2 gap-4 text-center p-3 my-3">
            <a className="p-1.5 rounded border border-gray-50" href=" ">SOURCE CODE</a>
            <a className="p-1.5 rounded border border-gray-50" href=" ">DEMO</a>
            </div>
           
            </div>
        </div>
    )
}
export default Project; 