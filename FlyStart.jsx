import React from 'react'
import { useNavigate } from 'react-router-dom';
const FlyStart = () => {
    const navigate = useNavigate();
    const navi=()=>{
        setTimeout(()=>{
            navigate("/start")
        },4999)
    }
  return (
    <>
        <img className="StartImage" src="./butterfly.gif" alt="" /> 
        {navi()}
    </>
  )
}

export default FlyStart