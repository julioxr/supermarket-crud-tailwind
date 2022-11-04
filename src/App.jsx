import { useState, useEffect } from "react";
import InputChecklist from "./components/InputChecklist";
import { RiArrowDownSLine } from "react-icons/ri";

function App() {
    const initialState = {
        id: 1,
        icon: "🍕",
        list: "Comprar pizzas",
    };

    const [checklist, setChecklist] = useState("");
    const [checklists, setChecklists] = useState([initialState]);

    const createChecklist = () => {
        setChecklists([
            ...checklists,
            {
                id: 2,
                icon: "🍕",
                list: checklist,
            },
        ]);
    };

    return (
        <>
            <header className="flex flex-col items-center mx-auto h-[270px] bg-primary-300 text-center">
                <section className="bg-primary-600 w-full h-2 mb-4 text-primary-50 py-2 text-2xl flex justify-center"></section>
                <h1 className="text-5xl tracking-tight font-black pt-2 text-primary-50 max-w-md">
                    Supermarket checklist
                </h1>
                <span className="text-xl text-primary-50 font-semibold mt-2 mb-1 ">
                    Happy shopping!
                </span>
                <form action="#">
                    <input
                        type="text"
                        placeholder="¿Qué necesitas comprar hoy?"
                        value={checklist}
                        className="rounded-lg font-thin placeholder:italic placeholder:text-slate-400 p-2.5 m-4 w-80 drop-shadow shadow-slate-500 text-base"
                        onChange={(e) => {
                            setChecklist(e.target.value);
                        }}
                    />
                    <button
                        type="button"
                        onClick={() => createChecklist()}
                        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    >
                        Guardar
                    </button>
                </form>
            </header>
            <main className="bg-gradient-to-b from-primary-300 to-primary-200 h-full">
                <div className="relative bg-primary-200/20 pt-[20px] rounded-2xl w-[360px] h-[450px] mx-auto shadow-lg shadow-primary-400 ">
                    <div className="w-[360px] h-[365px] overflow-y-scroll scrollbar-hide">
                        <section
                            id="checklist"
                            className=" flex flex-col items-center gap-1.5 mx-auto"
                        >
                            {checklists &&
                                checklists.map(({ id, icon, list }) => (
                                    <InputChecklist
                                        key={id}
                                        icon={icon}
                                        list={list}
                                    />
                                ))}
                        </section>
                    </div>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 ">
                        <RiArrowDownSLine className="text-3xl text-primary-600 bottom-0" />
                    </div>
                </div>
            </main>
        </>
    );
}

export default App;
