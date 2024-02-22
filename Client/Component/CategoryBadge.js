import React, { Component, useEffect, useState } from 'react';

const CuisineBadge  = (prop) => {
    // console.log(prop.data)
    return (
       <div className = "CuisineBadge" style = {styles.container}>
            {prop.category}
            <img src = {prop.image} alt = "img"/>
            </div>
        );
    }

const styles = {
    container: {
        border: '2px solid white',
        background_color: 'red',
    }
}

export default CuisineBadge