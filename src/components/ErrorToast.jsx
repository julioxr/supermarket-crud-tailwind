import React from "react";

const ErrorToast = ({ error }) => {
    return (
        <>
            <div className="absolute w-full h-8 top-60 left-1/2 transform -translate-x-1/2">
                <div className="flex justify-center ">
                    <p className="text-sm text-red-600/70">{error}</p>
                </div>
            </div>
        </>
    );
};

export default ErrorToast;
