import { useState, useEffect } from "react";
import InputChecklist from "./components/InputChecklist";
import Header from "./components/Header";
import DownButton from "./components/DownButton";

function App() {
    const initialState = {
        id: Date.now(),
        icon: "🍕",
        list: "Comprar pizzas",
    };

    const [checklist, setChecklist] = useState("");
    const [checklists, setChecklists] = useState([initialState]);

    const createChecklist = () => {
        setChecklists([
            ...checklists,
            {
                id: Date.now(),
                icon: "🍕",
                list: checklist,
            },
        ]);
        setChecklist("");
    };

    return (
        <>
            <Header
                checklist={checklist}
                createChecklist={createChecklist}
                setChecklist={setChecklist}
            />

            <main className="bg-gradient-to-b from-primary-300 to-primary-200 h-full">
                <div className="relative bg-primary-200/20 pt-[20px] rounded-2xl w-[360px] h-[450px] mx-auto shadow-lg shadow-primary-400 ">
                    <div className="w-[360px] h-[365px] overflow-y-scroll scrollbar-hide">
                        <section
                            id="checklist"
                            className=" flex flex-col items-center gap-1.5 mx-auto h-full "
                        >
                            {checklists.length ? (
                                checklists.map(({ id, icon, list }) => (
                                    <InputChecklist
                                        key={id}
                                        id={id}
                                        icon={icon}
                                        list={list}
                                        checklist={checklist}
                                        checklists={checklists}
                                        setChecklists={setChecklists}
                                    />
                                ))
                            ) : (
                                <div className="h-full text-2xl flex items-center animate-pulse">
                                    <p className=" text-primary-600 ">
                                        start shopping now
                                    </p>
                                </div>
                            )}
                        </section>
                    </div>
                    {checklists.length > 5 && <DownButton />}
                </div>
            </main>
        </>
    );
}

export default App;
