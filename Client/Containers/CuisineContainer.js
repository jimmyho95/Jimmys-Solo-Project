import React, {useEffect, useState} from 'react';
import CuisineBadge from "../Component/CuisineBadge.js"

const CuisineContainer = (props) => {


// console.log("cuisineOptions", cuisineOptions)

// for (let i=0;i<props.cuisineOptions.length;i++){
// optionArray.push(
//     <div id ="cuisineOptions">
//     props.cuisineOptions[i]
//     </div>
// )
// }

console.log('all cuisines: ', props.allCuisines)

    return (<div id = "cuisineContainer">
        {/* {props.allCuisines} */}
        <CuisineBadge 
            cuisineType={props.cuisineType} 
            setCuisineType={props.setCuisineType} 
            // cuisineOptions = {cuisineOptions}
            allCuisines = {props.allCuisines}
        />
        </div>
    )
}

export default CuisineContainer;