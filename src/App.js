import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faL, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';

import AddTaskForm from './components/AddTaskForm';
import UpdateForm from './components/UpdateForm';
import ToDo from './components/ToDo'; 

import './App.css';

function App() {

  // Task (To-Do List) State
  const [toDo, setToDo] = useState([]);

  // Temp State
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateDate] =useState('');

  // Add task
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = {id: num, title: newTask, status: false};
      setToDo([...toDo, newEntry]);
      setNewTask('');
    }
  }

  // Delete Task
  const deleteTask = (id) => {
    let newTasks = toDo.filter(task => task.id !== id);
    setToDo(newTasks);
  }

  // Mark task as done or complited
  const markDone = (id) => {
    let newTask = toDo.map(task => {
      if (task.id === id) {
        return (
          {...task, status: !task.status}
        )
      }
      return task;
    })
    setToDo(newTask);
  }

  // Cancel update 
  const cancelUpdate = () => {
    setUpdateDate('')
  }

  // Change task for update
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    }
    setUpdateDate(newEntry)
  }

  // Update task
  const updateTask = () => {
    let filterRecords = [...toDo].filter(task => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData];
    setToDo(updatedObject);
    setUpdateDate('')
  }

  return (
    <div className="container App">

    <br /><br />
    <h2>To Do List App</h2>
    <br /><br />

    {/* Update Task */}
    {updateData && updateData ? (
      <UpdateForm
        updateData={updateData}
        changeTask={changeTask}
        updateTask={updateTask}
        cancelUpdate={cancelUpdate}
       />
    ) : (
      <AddTaskForm
        newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask}
      />
    )}


    {/* Display ToDos */}

    {toDo && toDo.length ? '' : 'No tasks ...'} 

    <ToDo
       toDo={toDo}
       markDone={markDone}
       setUpdateDate={setUpdateDate}
       deleteTask={deleteTask}
    />

    </div>
  );
}

export default App;
