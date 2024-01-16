import React, { useEffect, useState } from 'react'
import UserContext from './UserContext'



const UserContextProvider = ({ children }) => {

  const [todoData, setTodoData] = useState(() => {
    const storedData = localStorage.getItem("todoData");
    return storedData ? JSON.parse(storedData) : [];
  });

  const [filter, setFilter] = useState('All');

  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(todoData));
  }, [todoData]);

  return (
    <>
      <UserContext.Provider value={{ todoData, setTodoData, filter, setFilter, }} >
        {children}
      </UserContext.Provider>
    </>
  )
}

export default UserContextProvider
