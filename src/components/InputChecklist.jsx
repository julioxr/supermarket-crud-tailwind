import React from "react";
import { TiDelete } from "react-icons/ti";

const asd = ({ icon, list }) => {
    return (
        <div className="flex rounded-lg bg-gradient-to-l from-primary-400 to-primary-500 text-primary-50  p-2 m-1 w-80 space-x-1 drop-shadow-md shadow-primary-400 transition-all hover:my-3 hover:text-white hover:scale-105 cursor-pointer">
            <span className="w-6 py-2">{icon}</span>

            <div className="flex w-full justify-between">
                <p className=" text-base text-primary-100 py-2">{list}</p>
                <button className="text-2xl">
                    <TiDelete />
                </button>
            </div>
        </div>
    );
};

export default asd;