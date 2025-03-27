import React, { Component, useEffect, useState } from 'react';

const CuisineBadge  = (props) => {
    const handleClick = () => {
        props.setCuisineType(props.cuisineType);
    }
    console.log("allcuisines:" + props.allCuisines)
    return (
       <div className = "CuisineBadge" >
            {props.allCuisines}
            <button className = "button" onClick={() => handleClick()}> {props.allCuisines}</button>
            </div>
        );
    }



export default CuisineBadge