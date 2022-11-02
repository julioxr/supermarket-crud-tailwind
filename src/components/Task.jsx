import React from "react";
import { TiDelete } from "react-icons/ti";

const Task = ({ icon, task }) => {
    return (
        <div className="flex justify-start rounded-sm bg-gradient-to-br from-primary-500 to-primary-600 text-primary-50 py-2 p-2 m-1 w-80 space-x-1 shadow-md shadow-primary-400 transition-all hover:my-3 hover:text-white hover:scale-105">
            <span className="w-6 py-1">{icon}</span>
            <div className="flex w-full justify-between">
                <p className=" text-sm cursor-pointer text-primary-100 py-2">
                    {task}
                </p>
                <button>
                    <TiDelete />
                </button>
            </div>
        </div>
    );
};

export default Task;
