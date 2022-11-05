import React from "react";
import { TiDelete } from "react-icons/ti";

const InputChecklist = ({ id, icon, list, checklists, setChecklists }) => {
    const deleteItemList = () => {
        const deletedItem = checklists.filter((itemList) => itemList.id !== id);

        console.log(deletedItem);
        setChecklists(deletedItem);
    };

    return (
        <div className="flex rounded-lg bg-gradient-to-l from-primary-400 to-primary-500 text-primary-50  p-2 m-1 w-80 space-x-1 drop-shadow-md shadow-primary-400 transition-all hover:my-3 hover:text-white hover:scale-105 border border-primary-50">
            <div className="flex w-full justify-between items-center">
                <p className=" text-base text-primary-100 py-[7px]">{list}</p>
                <TiDelete
                    id={id}
                    className="text-2xl cursor-pointer"
                    onClick={() => deleteItemList()}
                />
            </div>
        </div>
    );
};

export default InputChecklist;
