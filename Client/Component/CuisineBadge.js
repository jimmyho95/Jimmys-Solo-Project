import React from "react";

const CuisineBadge = ({ cuisineType, setCuisineType }) => {
    return (
        <button onClick={() => setCuisineType(cuisineType)}>
            {cuisineType}
        </button>
    );
};

export default CuisineBadge;
