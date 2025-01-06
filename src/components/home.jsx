import Banner from "./banner"
import Category from "./category"
import Jobs from "../jobHandle/jobs"
import { useEffect } from "react"

import React from "react"
export default function Home({setProgress}){    
    useEffect(()=>{
        setProgress(30);
        setTimeout(()=>{
            setProgress(100)
        },1000);
    },[]);
    return<>
    <Banner/>
    <Category/>
    <Jobs/>
        
    </>
}