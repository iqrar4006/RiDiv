import React, { useContext, useState } from 'react';
import UserContext from '../context/UserContext';
import { MdDelete } from 'react-icons/md';
import { ImCheckmark } from 'react-icons/im';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Task_list = () => {
  const { todoData, setTodoData, filter } = useContext(UserContext);

  const handleDelete = (index) => {
    const updatedTodoData = [...todoData];
    // console.log('before',updatedTodoData)
    updatedTodoData.splice(index, 1);
    // console.log('after',updatedTodoData)
    setTodoData(updatedTodoData);
  };

  const handleStatus = (index) => {
    const updatedTodoData = [...todoData];
    updatedTodoData[index].status = 'completed';
    setTodoData(updatedTodoData);
  };

  const todoDataFromDragDrop=(todoData,startIndex,endIndex)=>{
    const new_todo_data=Array.from(todoData)
    const removed=new_todo_data[startIndex]
    new_todo_data.splice(startIndex,1)
    new_todo_data.splice(endIndex,0,removed)
    return new_todo_data
  }

  const onEnd = (result) => {
    setTodoData(todoDataFromDragDrop(todoData,result.source.index,result.destination.index))
  };

  const filteredData = todoData.filter((todo) => {
    if (filter === 'All') {
      return true;
    } else {
      return todo.status === filter;
    }
  });

  const style_completed = 'border-b border-slate-400 bg-white';
  const style_incomplete = 'border-b border-slate-400 bg-slate-200';

  return (
    <>
      <table className="w-full border-collapse border-[1px] border-slate-400 mt-2">
        <thead>
          <tr className="bg-emerald-600 text-white">
            <th className="py-2">Task Name</th>
            <th className="py-2">Date</th>
            <th className="py-2">Status</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <DragDropContext onDragEnd={onEnd}>
          <Droppable droppableId="123456">
            {(provided, snapshot) => (
              <tbody ref={provided.innerRef} {...provided.droppableProps}>
                {filteredData.map((todo, index) => (
                  <Draggable draggableId={`${index}`} key={`${index}`} index={index}>
                    {(provided, snapshot) => (
                      <tr
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={todo.status === 'incomplete' ? style_incomplete : style_completed}
                      >
                        <td className="py-2 text-center">{todo.task_name}</td>
                        <td className="py-2 text-center">{todo.date}</td>
                        <td className="py-2 text-center">{todo.status}</td>
                        <td className="py-2 text-center">
                          <div className="flex items-center justify-center">
                            {todo.status === 'incomplete' && (
                              <>
                                <MdDelete onClick={() => handleDelete(index)} size={28} className="mr-1 md:mr-2 cursor-pointer" />
                                <ImCheckmark onClick={() => handleStatus(index)} size={28} className="cursor-pointer" />
                              </>
                            )}

                            {todo.status === 'completed' && (
                              <>
                                <MdDelete onClick={() => handleDelete(index)} size={28} className="mr-1 md:mr-2 cursor-pointer" />
                                <ImCheckmark size={28} className="invisible " />
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </tbody>
            )}
          </Droppable>
        </DragDropContext>
      </table>
    </>
  );
};

export default Task_list;


