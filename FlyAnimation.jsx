import React from 'react'
import './index.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Page from './Page';
const FlyAnimation = () => {   
    const navigate = useNavigate();
    const navi=()=>{
        setTimeout(()=>{
            navigate("/page")
        },4999)
    }
  return (
    <>
        <img className="HomeImage" src="./butterfly.gif" alt="" /> 
        {navi()}
    </>
  )
}
export default FlyAnimation