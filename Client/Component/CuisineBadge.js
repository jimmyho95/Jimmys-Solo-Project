import React, { Component, useEffect, useState } from 'react';

const CuisineBadge  = (props) => {
    const handleClick = () => {
        props.setCuisineType(props.cuisineType);
    }
    return (
       <div className = "CuisineBadge" >
            {/* {props.allCuisines} */}
            <button onClick={() => handleClick()}> {props.allCuisines}</button>
            </div>
        );
    }



export default CuisineBadge