import React from "react";

const ErrorToast = ({ error }) => {
    return (
        <>
            <div className="absolute flex border bg-red-800 ">
                <p className="text-primary-600">{error}</p>
                <span> x </span>
            </div>
        </>
    );
};

export default ErrorToast;
