import { useState } from "react";
import Task from "./components/Task";
import { BiTask } from "react-icons/bi";

function App() {
    return (
        <>
            {/* <div className="bg-primary-600 w-full text-center p-0 font-thin text-sm text-primary-50 py-2">
                Hecho por @Julio
            </div> */}
            <header className="flex flex-col justify-center items-center mx-auto pt-6 h-[220px] bg-primary-300">
                <div className="text-center">
                    {/* <BiTask className="text-6xl w-full text-primary-800" /> */}
                    <h1 className="text-5xl tracking-tight font-bold bg-clip-text text-transparent bg-gradient-to-br from-primary-700 to-primary-600 max-w-md mb-4">
                        Supermarket checklist
                    </h1>
                    <span className="text-xl text-primary-50 font-semibold">
                        Happy shopping!
                    </span>

                    <form action="#">
                        <input
                            type="text"
                            placeholder="Agregue una tarea"
                            className="rounded-sm font-thin placeholder:italic placeholder:text-slate-400 p-2 m-4 w-80 shadow-md shadow-primary-400"
                        />
                    </form>
                </div>
            </header>
            <main className="bg-gradient-to-b from-primary-300 to-primary-200 h-full overflow-y-hidden pt-2">
                <section className="container flex flex-col items-center mx-auto overflow-y-hidden ">
                    <Task icon="🍔" task="Comprar hamburguesas" />
                    <Task icon="🍕" task="Comprar pizza" />
                    <Task icon="🌭" task="Comprar pacho" />
                    <Task icon="🍗" task="Comprar pollo" />
                    <Task icon="🍿" task="Comprar papas fritas" />
                    <Task icon="🥓" task="Comprar panceta" />
                    <Task icon="🥟" task="Comprar empandas" />
                </section>
                <section></section>
            </main>
        </>
    );
}

export default App;
