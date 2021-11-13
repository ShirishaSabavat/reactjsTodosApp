import React, { useState } from "react"
import TodosList from "./TodoList";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [task, setTask] = useState("")
  const [todos, setTodos] = useState([])
  const [id, setId] = useState(0);
  const [done, setDone] = useState(false)
  
  const onChangeEventHandler = e => {
    setTask(e.target.value)
  }

  const onSubmitEventHandler = e => {
    e.preventDefault();
    const newTodos = [...todos, { id: id, task: task, done: done }];
    setTodos(newTodos);
    console.log(newTodos)
    setId(id + 1);
    setTask("");
  }

  const onDeleteEventHandler = (indexValue) => {
    const newTodos = todos.filter((todo, index) => index !== indexValue);
    setTodos(newTodos);
  }

  const checkAndStrike = (todoId) => {
    let updatedTodos = todos.map((todoObj) => {
      if (todoObj.id === todoId) {
        setDone(todoObj.done = !todoObj.done)
      }
      return todoObj;
    });
    setTodos(updatedTodos);
    console.log(todos)
  }
  return (
    <div className="App">
      <center>
        <div className="p-5 w-50 todos-overflow">
          <h5 className="text-info">Todo-List Application</h5>
          <form className="d-flex flex-row justify-content-center mb-5 mt-3" onSubmit={onSubmitEventHandler} >
            <input required className="form-control form-control-sm w-50 mt-2" type="text" name="task" value={task} placeholder="Write here..." onChange={onChangeEventHandler} /> &nbsp;&nbsp;
            <input style={{ fontSize: "12px", height: "30px" }} className="btn btn-info text-white mt-2" type="submit" value="Add Todo" name="Add" />
          </form>
          <div class="container">
            <div className="row">
              <TodosList todosList={todos} onDeleteHandler={onDeleteEventHandler} checkAndStrike={checkAndStrike} />
            </div>
          </div>
        </div>
      </center>
    </div>
  );
}

export default App;
