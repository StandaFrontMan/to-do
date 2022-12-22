import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';

import './App.css';

function App() {

  // Task (To-Do List) State
  const [toDo, setToDo] = useState([
    {id: 1, title: 'Task 1', status: false},
    {id: 2, title: 'Task 2', status: false},
  ]);

  // Temp State
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateDate] =useState('');

  // Add task
  const addTask = () => {

  }

  // Delete Task
  const deleteTask = (id) => {

  }

  // Mark task as done or complited
  const markDone = (id) => {

  }

  // Cancel update 
  const cancelUpdate = () => {

  }

  // Change task for update
  const changeTask = (e) => {

  }

  // Update task
  const updateTask = () => {
    
  }

  return (
    <div className="container App">

    <br /><br />
    <h2>To Do List App</h2>
    <br /><br />

    </div>
  );
}

export default App;
