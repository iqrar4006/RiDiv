import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Task_form = () => {
  const { todoData, setTodoData, setFilter } = useContext(UserContext)
  // console.log('todoData', todoData)
  const [newData, setNewData] = useState({ 'task_name': '', 'date': '', 'status': 'incomplete' });

  const handleName = (e) => {
    setNewData({ ...newData, task_name: e.target.value });
  };

  const handleDate = (e) => {
    setNewData({ ...newData, date: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoData([...todoData, newData]);
    setNewData({ 'task_name': '', 'date': '', 'status': 'incomplete' });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="p-3 ">
        <div>
          <input type="text" name="task_name" id="task_name" value={newData.task_name} onChange={handleName} className="w-full font-bold text-xl font-mono px-4 py-1 outline-none rounded-md" placeholder="Enter your task.." required />
        </div>
        <div>
          <input type="date" name="date" id="date" value={newData.date} onChange={handleDate} className="w-full font-normal text-xl font-mono px-4 py-1 outline-none rounded-md mt-1 " required />
        </div>
        <button
          type="submit"
          className="w-full  mx-auto font-bold text-2xl m-1 py-1 font-mono rounded-md bg-white hover:bg-slate-100"
        >
          Submit
        </button>
      </form>

      <div className="w-full flex justify-evenly ">
        <button type="button" className="font-bold text-base md:text-xl px-2 md:px-4 py-1 font-mono rounded-md bg-white hover:bg-slate-100" onClick={() => setFilter('All')}>All</button>
        <button type="button" className="font-bold text-base md:text-xl px-2 md:px-4 py-1 font-mono rounded-md bg-white hover:bg-slate-100" onClick={() => setFilter('completed')}>Completed</button>
        <button type="button" className="font-bold text-base md:text-xl px-2 md:px-4 font-mono rounded-md bg-white hover:bg-slate-100" onClick={() => setFilter('incomplete')}>Incomplete</button>
      </div>
    </>
  )
}

export default Task_form
