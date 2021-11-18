import React, { useState, useEffect } from "react"
import TodosList from "./TodoList";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [task, setTask] = useState("")
  const [todos, setTodos] = useState([])
  const [editTodo, setEditTodo] = useState(null)

  const onChangeEventHandler = e => {
    setTask(e.target.value)
  }

  const updateTodo=(task, id, done) =>{
    const newTodo=todos.map((todo)=>(todo.id === id) ? {task, id, done} : todo);
    setTodos(newTodo);
    setEditTodo("")
  };
  useEffect(()=>{
    if (editTodo){
      setTask(editTodo.task);
    }else{
      setTask("")
    }
  }, [setTask, editTodo])

  const onSubmitEventHandler = e => {
    e.preventDefault();
    if (!editTodo){
      setTodos(prevState => prevState.map((todo, index) => todo.id = index + 1))
      setTodos([{ task: task, done: false }, ...todos]);
      setTask("");
    }else{
      updateTodo(task, editTodo.id, editTodo.done);
    }
  }

  const onDeleteEventHandler = (indexValue) => {
    const newTodos = todos.filter((todo, index) => {
      if (index !== indexValue) {
        return todo;
      } else {
        return "";
      }
    })
    setTodos(newTodos)
    console.log(todos)
  }

  const onEditHandler = (id) => {
    const findTodo = todos.find( (todo) => todo.id === id);
    setEditTodo(findTodo);
  }

  const checkAndStrike = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, done: !item.done };
        } else {
          return item;
        }
      })
    );
  }
  return (
    <div className="App">
      <center>
        <div className="p-5 w-50 todos-overflow">
          <h5 className="text-info">Todo-List Application</h5>
          <form className="d-flex flex-row justify-content-center mb-5 mt-3" onSubmit={onSubmitEventHandler} >
            <input required className="form-control form-control-sm w-50 mt-2" type="text" name="task" value={task} placeholder="Write here..." onChange={onChangeEventHandler} /> &nbsp;&nbsp;
            <button style={{ fontSize: "12px", height: "30px" }} className="btn btn-info text-white mt-2" type="submit" name="Add" >
              {editTodo ? "OK" : "Add"}
            </button>
          </form>
          <div className="container">
            <div className="row">
              <TodosList todosList={todos} onDeleteHandler={onDeleteEventHandler} checkAndStrike={checkAndStrike} onEditHandler={onEditHandler} />
            </div>
          </div>
        </div>
      </center>
    </div>
  );
}

export default App;
