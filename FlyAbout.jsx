import React from 'react'
import {useNavigate } from 'react-router-dom';

const FlyAbout = () => {
    const navigate = useNavigate();
    const navi=()=>{
        setTimeout(()=>{
            navigate("/about")
        },4999)
    }
  return (
    <>
        <img className="PageImage" src="./butterfly.gif" alt="" /> 
        {navi()}
    </>
  )
}

export default FlyAbout