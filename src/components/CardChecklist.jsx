import React from "react";
import { TiDelete } from "react-icons/ti";

const CardChecklist = ({
    id,
    list,
    checklists,
    setChecklists,
    completed,
    completeTask,
}) => {
    const deleteItemList = () => {
        const deletedItem = checklists.filter((itemList) => itemList.id !== id);
        setChecklists(deletedItem);
    };

    const checkedStyle = completed ? "line-through" : "";

    return (
        <div className="pl-3 flex items-center rounded-lg bg-gradient-to-l from-primary-400 to-primary-500 text-primary-50  p-2 m-1 w-80 space-x-1 drop-shadow-md shadow-primary-400 transition-all hover:text-white hover:my-3 hover:scale-105 border border-primary-50">
            <input
                type="checkbox"
                id={id}
                onChange={() => completeTask(id)}
                checked={completed}
            />
            <div className="flex w-full justify-between items-center ">
                <p
                    onClick={() => completeTask(id)}
                    className={`${checkedStyle} text-base text-primary-100 py-[7px] pl-1 w-full`}
                >
                    {list}
                </p>
                <TiDelete
                    id={id}
                    className="text-2xl cursor-pointer"
                    onClick={() => deleteItemList()}
                />
            </div>
        </div>
    );
};

export default CardChecklist;
