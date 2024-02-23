import React, { useState, useEffect } from "react";
import CuisineContainer from "./CuisineContainer";
import CuisineBadge from "../Component/CuisineBadge";
import StoreContainer from './StoreContainer';
// import storeContainer from "./storeContainer";

const BadgeContainer = (props) => {
    const [allCuisines, setAllCuisines] = useState([]);
    const [cuisineType, setCuisineType] = useState(null);
    const cuisineOptions = [];
    const handleCuisines = () => {
        for (let i = 0; i < props.data.length; i++) {
            for (let j = 0; j < props.data[i].categories.length; j++) {
                cuisineOptions.push(<CuisineBadge>props.data[i].categories[j].title</CuisineBadge>)
            }
        }
        setAllCuisines(cuisineOptions);
    }

    useEffect(() => {
        handleCuisines();
    }, []);

    // console.log("badge",props.data)


    // for (let i = 0; i < props.data.length; i++) {
    //     for (let j = 0; j < props.data[i].categories.length; j++){
    //         cuisineOptions.push(<div>props.data[i].categories[j].title</div>)
    //     }
    // }

    return (
        <div id="badgeContainer">
            {
                !cuisineType
                    ? <CuisineContainer
                        data={props.data}
                        cuisineType={cuisineType}
                        setCuisineType={setCuisineType}
                        cuisineOptions={cuisineOptions}
                        allCuisines={allCuisines}
                    />
                    : <StoreContainer data={props.data} cuisineType={cuisineType} />
            }
        </div>
    )
};

export default BadgeContainer