import { useState } from "react";
import Task from "./components/Task";
import { BsCart4 } from "react-icons/bs";
import { TiPlus } from "react-icons/ti";
import { RiArrowDownSLine } from "react-icons/ri";

function App() {
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
                        placeholder="Agregue una tarea"
                        className="rounded-lg font-thin placeholder:italic placeholder:text-slate-400 p-2.5 m-4 w-80 drop-shadow shadow-slate-500 text-base"
                    />
                </form>
            </header>
            <main className="bg-gradient-to-b from-primary-300 to-primary-200 h-full">
                <div className="relative bg-primary-50/20 pt-[20px] rounded-2xl overflow-y-hidden w-[360px] h-[500px] mx-auto shadow-lg shadow-primary-400">
                    <section className=" flex flex-col items-center gap-1.5 mx-auto">
                        <Task icon="🍔" task="Comprar hamburguesas" />
                        <Task icon="🍕" task="Comprar pizza" />
                        <Task icon="🌭" task="Comprar pancho" />
                        <Task icon="🍗" task="Comprar pollo" />
                        <Task icon="🍿" task="Comprar papas fritas" />
                        <Task icon="🥓" task="Comprar panceta" />
                    </section>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 ">
                        <RiArrowDownSLine className="text-3xl text-primary-600 bottom-0" />
                    </div>
                </div>
            </main>
        </>
    );
}

export default App;
