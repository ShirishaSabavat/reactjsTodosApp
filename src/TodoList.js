import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'


const TodosList = ({ todosList, onDeleteHandler, checkAndStrike }) => {
    const [centeredModal, setCenteredModal] = useState(false)
    const [task, setTask] = useState("")

    const onClickTodoView = (todo) => {
        setTask(todo.task)
        setCenteredModal(!centeredModal)
        console.log(todo.id);
    }

    return (
        <div>

            <div className='demo-inline-spacing'>
                <div className='vertically-centered-modal'>
                    <Modal isOpen={centeredModal} toggle={() => setCenteredModal(!centeredModal)} className='modal-dialog-centered'>
                        <ModalHeader toggle={() => setCenteredModal(!centeredModal)}>Todo Item</ModalHeader>
                        <ModalBody className="task-overflow">
                            {task}
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={() => setCenteredModal(!centeredModal)}>
                                Cancel
                            </Button>{' '}
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
            {todosList.map((todo, index) =>
                <div key={index} className="form-control form-control-sm p-0 todo-items m-2">
                    <div className="d-flex col-10">
                        <input className="todo-checkbox-item m-2" type="checkbox" id={index} onChange={() => checkAndStrike(todo.id)} />
                        <label className={todo.done ? "text-secondary todo-task-name-item complete mt-1 mr-5" : "text-secondary mt-1 mr-5"} htmlFor={index} >
                            {todo.task.slice(0, 25)}{todo.task.length <= 25 ? "" :
                                <button style={{ backgroundColor: "white", border: "0px none" }} className="text-info" onClick={(task) => onClickTodoView(todo)}>
                                    .....view
                                </button>}
                        </label>
                    </div>
                    <div className="col-2">
                        <button style={{ fontSize: "12px", height: "30px", backgroundColor: "white", border: "0px none" }} className="text-dark todo-delete-item" onClick={() => onDeleteHandler(index)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                            </svg>
                        </button>
                    </div>
                </div>)}
        </div>
    )
}

export default TodosList