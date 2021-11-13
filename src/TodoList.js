import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

const TodosList = ({ todosList, onDeleteHandler, checkAndStrike }) => {
    return (
        <div>
            {todosList.map((todo, index) =>
                <div key={index} className="form-control form-control-sm p-0 todo-items m-2">
                    <div className="d-flex col-10">
                    <input className="todo-checkbox-item m-2" type="checkbox" id={index} onChange={() => checkAndStrike(todo.id)} /> &nbsp;
                    <label className={todo.done ? "text-secondary todo-task-name-item complete mt-1 mr-5" : "text-secondary mt-1 mr-5"} htmlFor={index} >{todo.task} &nbsp;</label>
                    </div>
                    <div className="col-2">
                    <button style={{ fontSize: "12px", height: "30px", backgroundColor: "white", border: "0px none" }} className="text-dark todo-delete-item" onClick={() => onDeleteHandler(index)}>X</button>
                    </div>    
                </div>)}
        </div>
    )
}

export default TodosList