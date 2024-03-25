import React from 'react'
import './index.css'
import {useNavigate } from 'react-router-dom';

const FlyHome = () => {
    const navigate = useNavigate();
    const navi=()=>{
        setTimeout(()=>{
            navigate("/")
        },4999)
    }
  return (
    <>
        <img className="PageImage" src="./butterfly.gif" alt="" /> 
        {navi()}
    </>
  )
}

export default FlyHome