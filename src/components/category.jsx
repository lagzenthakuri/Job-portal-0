import React from "react";
import { GiSpiderWeb } from "react-icons/gi";
import { FaCode } from "react-icons/fa6"; 
import { TbDeviceMobileCode } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { SiAltiumdesigner } from "react-icons/si";
import { SiGamemaker } from "react-icons/si";
import { MdOutlineVideoChat } from "react-icons/md";
import { IoLogoAppleAr } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa";
import { DiScrum } from "react-icons/di";


let products = [  //some infos of container 
    {
        "title": "Frontend",  
        "image":<GiSpiderWeb />,
      
    }
    ,{
      "title": "Backend",
      "image":<FaCode/>,

    }
    ,{
      "title": "App Developer",
      "image":<TbDeviceMobileCode/>,
    }
    ,{
      "title": "Cyber Security",
      "image":<MdSecurity/>,
    }
    ,{
      "title": "Graphic Designer",
      "image":<SiAltiumdesigner/>,
    }
    ,{
      "title": "Game Developer",
      "image":<SiGamemaker/>,
    }
    ,{
      "title": "Video Editor",
      "image":<MdOutlineVideoChat/>,
    }
    ,{
      "title": "App developer",
      "image":<IoLogoAppleAr/>,
    }
    ,{
      "title": "HR Specialist",
      "image":<FaUserTie/>,
    }
    ,{
      "title": "Scrum Master",
      "image":<DiScrum/>,
    }
    ]  
export default function Category(){
    return <>
    <div>
    <div className="  bg-title_2">
      <p className="text-center text-2xl font-bold p-4">Popular Categories</p>
      <div className="sm:ml-14  relative">
      <div className="products grid  gap-3  md:grid-cols-3 lg:grid-cols-4 m-5 grid-cols-2  xl:grid-cols-5"> {
        
            products.map( (product,index)=>{
                let {title,image} = product
                return <div className="product border relative bg-white  h-36 w-36  m-2 capitalize text-center justify-center hover:ring-2" key={index}> 
              
                {/* styling the image and categories */}
                <span className="absolute justify-center items-center text-4xl text-teal-800 bg-zinc-300 ring rounded-full p-2 mt-16 ml-10 flex"> {image}</span> 
                <p className="font-bold mr-5 m-2 ">{title}</p>
                
                </div>
            })
        }
      </div>
      </div>
    </div>

    </div>
    </>
}