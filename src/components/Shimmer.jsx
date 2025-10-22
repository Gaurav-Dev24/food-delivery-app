import React from "react";
const ShimmerCard = () => {
    return (
        <div className="card shimmer-card border-0 shadow-sm rounded-4 p-4" style={{ width: "16rem" }}>
            <div className="shimmer-img bg-light"></div>

            <div className="card-body">
                <div className="shimmer-line w-75 mb-2"></div>
                <div className="shimmer-line w-50 mb-2"></div>
                <div className="shimmer-line w-25 mb-3"></div>
                <div className="shimmer-line w-50"></div>
            </div>
        </div>
    );
};

export default ShimmerCard;
