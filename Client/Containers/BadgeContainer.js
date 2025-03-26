import React, { useState, useEffect } from "react";
import CuisineContainer from "./CuisineContainer";
import CuisineBadge from "../Component/CuisineBadge";
import StoreContainer from "./StoreContainer";

const BadgeContainer = (props) => {
    console.log("BadgeContainer received data:", props.data);
    
    const [allCuisines, setAllCuisines] = useState([]);
    const [cuisineType, setCuisineType] = useState(null);

    useEffect(() => {

    }, [allCuisines])

    // useEffect(() => {
    //     if (!props.data || props.data.length === 0) return; // Prevent errors if data is empty
    
    //     // Use a Set to filter out duplicate cuisines
    //     const uniqueCuisines = new Set();
    
    //     const cuisineOptions = props.data.flatMap((restaurant) =>
    //         restaurant.categories
    //             .map((category) => category.title)
    //             .filter((cuisine) => {
    //                 if (!uniqueCuisines.has(cuisine)) {
    //                     uniqueCuisines.add(cuisine);
    //                     return true;
    //                 }
    //                 return false;
    //             })
    //             .map((cuisine) => <CuisineBadge key={cuisine} cuisineType={cuisine} />)
    //     );
    
    //     setAllCuisines(cuisineOptions);
    // }, [props.data]); // Depend on props.data to rerun when it updates
    
    // useEffect(() => {
    //     if (!props.data || props.data.length === 0) return; // Prevent errors if data is empty
 
    //     const cuisineOptions = props.data.flatMap((restaurant) =>
    //         restaurant.categories.map((category) => (
    //             <CuisineBadge key={category.title} cuisineType={category.title} />
    //         ))
    //     );

    //     setAllCuisines(cuisineOptions);
    // }, [props.data]); // Depend on props.data to rerun when it updates

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
