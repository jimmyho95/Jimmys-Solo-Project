import React, { useState, useEffect } from "react";
import CuisineContainer from "./CuisineContainer";
import CuisineBadge from "../Component/CuisineBadge";
import StoreContainer from "./StoreContainer";

const BadgeContainer = (props) => {
    console.log("BadgeContainer received data:", props.data);
    
    const [allCuisines, setAllCuisines] = useState([]);
    const [cuisineType, setCuisineType] = useState(null);

    useEffect((props)=> {
        if (!props.data || props.data.length === 0) return;

        const uniqueCuisines = new Set();
        const cuisineOptions = [];

        props.data.forEach((category) => {
            if (!uniqueCuisines.includes(category.title)) {
                uniqueCuisines.add(category.title);
                cuisineOptions.push(category.title)
            }
        })
        setAllCuisines(cuisineOptions)
    },[props.data])

    return (
        <div id="badgeContainer">
            {!cuisineType ? (
                <CuisineContainer
                    cuisineType={cuisineType}
                    setCuisineType={setCuisineType}
                    cuisineOptions={allCuisines} // Use state variable here
                    allCuisines={allCuisines}
                />
            ) : (
                <StoreContainer data={props.data} cuisineType={cuisineType} />
            )}
        </div>
    );
};

export default BadgeContainer;
