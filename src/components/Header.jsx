import React from "react";
import { TiPlus } from "react-icons/ti";

const Header = ({ checklist, setChecklist, createChecklist }) => {
    return (
        <header className="flex flex-col items-center mx-auto h-[270px] bg-primary-300 text-center">
            <section className="bg-primary-600 w-full h-2 mb-4 text-primary-50 py-2 text-2xl flex justify-center"></section>
            <h1 className="text-5xl tracking-tight font-black pt-2 text-primary-50 max-w-md">
                Supermarket checklist
            </h1>
            <span className="text-xl text-primary-50 font-semibold mt-2 mb-1 ">
                Happy shopping!
            </span>
            <form action="#" className="">
                <div className="flex items-center relative">
                    <input
                        type="text"
                        placeholder="
                        what do you need to buy today?"
                        value={checklist}
                        className="rounded-lg font-thin placeholder:italic placeholder:text-slate-400 p-2.5 m-4 w-80 drop-shadow shadow-slate-500 text-base"
                        onChange={(e) => {
                            setChecklist(e.target.value);
                        }}
                    />
                    <TiPlus
                        className="absolute right-8 text-primary-600"
                        type="submit"
                        onClick={() => createChecklist()}
                    />
                </div>
                {/* <button
                        type="button"
                        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    >
                        Guardar
                    </button> */}
            </form>
        </header>
    );
};

export default Header;
