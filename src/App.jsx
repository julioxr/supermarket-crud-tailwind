import { useState, useEffect } from "react";
import InputChecklist from "./components/InputChecklist";
import Header from "./components/Header";
import DownButton from "./components/DownButton";
import EmptyChecklist from "./components/EmptyChecklist";

function App() {
    const initialState = {
        id: Date.now(),
        list: "🍕 Comprar pizzas",
    };

    const [checklist, setChecklist] = useState("");
    const [checklists, setChecklists] = useState([initialState]);

    const createChecklist = () => {
        setChecklists([
            ...checklists,
            {
                id: Date.now(),
                list: checklist,
            },
        ]);
        setChecklist("");
    };

    const getListFromLocal = () => {
        const dataFromLocal = JSON.parse(localStorage.getItem("list"));
        return dataFromLocal;
    };
    useEffect(() => {
        const res = getListFromLocal();
        console.log(res);
        //console.log(JSON.parse(localStorage.getItem("list")).length );
    }, []);

    useEffect(() => {
        // Cuando se modifica el Checklists (el arrray de list) se va actualizar el localstorage guardando la nueva info
        localStorage.setItem("list", JSON.stringify(checklists));
    }, [checklists]);

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
                                        list={list}
                                        checklist={checklist}
                                        checklists={checklists}
                                        setChecklists={setChecklists}
                                    />
                                ))
                            ) : (
                                <EmptyChecklist />
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
