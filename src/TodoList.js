import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { Edit, CheckCircle, Trash } from 'react-feather';


const TodosList = ({ todosList, onDeleteHandler, checkAndStrike, onEditHandler }) => {
    const [centeredModal, setCenteredModal] = useState(false)
    const [task, setTask] = useState("")

    const onClickTodoView = (todo) => {
        setTask(todo.task)
        setCenteredModal(!centeredModal)
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
                <div key={index} className="form-control form-control-sm todo-items p-0 m-3">
                    <div className="d-flex col-9">
                        <label className={todo.done ? "text-secondary todo-task-name-item complete mt-1 mr-0" : "text-secondary mt-1"} htmlFor={index} >
                            &nbsp;&nbsp; {todo.task.slice(0, 25)}{todo.task.length <= 25 ? "" :
                                <button style={{ backgroundColor: "white", border: "0px none" }} className="text-info" onClick={(task) => onClickTodoView(todo)}>
                                    .....view
                                </button>}
                        </label>
                    </div>
                    <div className="col-3 mt-1">
                        <CheckCircle className="text-secondary" id={index} onClick={() => checkAndStrike(todo)} size={16} />
                        &nbsp; <Edit className="text-secondary" id={index} onClick={() => onEditHandler(todo.id)} size={16} />
                        &nbsp; <Trash className="text-secondary" onClick={() => onDeleteHandler(index)} size={16} />
                        
                    </div>
                </div>)}
        </div>
    )
}

export default TodosList