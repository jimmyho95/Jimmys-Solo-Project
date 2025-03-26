import React from "react";

const StoreBadge = ({ businessName, address, rating }) => {
    console.log("StoreBadge received props:", { businessName, address, rating });

    return (
        <div>
            <h3>{businessName || "Unnamed Business"}</h3>
            <p>{address || "No Address Available"}</p>
            <p>{rating !== undefined ? `⭐ ${rating}` : "No Rating"}</p>
        </div>
    );
};

export default StoreBadge;
