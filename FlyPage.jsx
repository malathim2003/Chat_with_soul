import React from 'react'
import './index.css'
import {useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Page from './Page';
const FlyPage = () => {   
    const navigate = useNavigate();
    const navi=()=>{
        setTimeout(()=>{
            navigate("/remedies")
        },4999)
    }
  return (
    <>
        <img className="PageImage" src="./butterfly.gif" alt="" /> 
        {navi()}
    </>
  )
}
export default FlyPage