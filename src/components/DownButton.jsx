import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const DownButton = () => {
    return (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 ">
            <RiArrowDownSLine className="text-3xl animate-bounce cursor-pointer text-primary-600 bottom-0" />
        </div>
    );
};

export default DownButton;
