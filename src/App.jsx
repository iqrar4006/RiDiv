

import { useState, useEffect } from "react";
import Task_form from "./components/Task_form";
import Task_list from "./components/Task_list";

function App() {
  return (
    <>
      <div className="bg-emerald-700 w-full h-screen flex flex-col justify-center p-4">

        <div className=" w-full md:w-3/5 md:mx-auto h-full border-[1px] border-slate-400 px-2  rounded-md flex flex-col">
          <h1 className="py-1 font-bold text-4xl font-mono text-center text-white">TASK LIST</h1>
          <div className="w-full h-[195px]">
            < Task_form />
          </div>

          <div className=" w-full flex-grow my-4 overflow-auto custom-scrollbar">
            <Task_list />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;


