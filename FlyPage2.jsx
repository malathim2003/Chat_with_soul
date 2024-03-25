import React from 'react'
import './index.css'
import {useNavigate } from 'react-router-dom';

const FlyPage2 = () => {
    const navigate = useNavigate();
    const navi=()=>{
        setTimeout(()=>{
            navigate("/start")
        },4999)
    }
  return (
    <>
        <img className="PageImage" src="./butterfly.gif" alt="" /> 
        {navi()}
    </>
  )
}

export default FlyPage2