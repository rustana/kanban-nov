import {v4 as uuidv4} from 'uuid';import React, {useState} from 'react';import {Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, InputGroupText, Input} from 'reactstrap';function CreateTaskModal(props) {// const [newCard, setNewCard]=useState(props.card)    const [name, setName] = useState('')    const [description, setDescription] = useState('')    const [status, setStatus] = useState(props.statuses[0])    const [priority, setPriority] = useState(props.priorities[0])    const newCard = {id: uuidv4(), name, priority, status: status.toLowerCase(), description}    const buttonHandler = () => {        props.toggle()        props.createUpdateButton(newCard)        setName('')        setDescription('')        setStatus(props.statuses[0])        setPriority(props.priorities[0])    }    return (        <p>            <Button color="success" onClick={props.toggle} style={{margin: "30px"}}>Create</Button>            <Modal isOpen={props.open} toggle={props.toggle}>                <ModalHeader toggle={props.toggle}>Create</ModalHeader>                <ModalBody>                    <InputGroup>                        <InputGroupText>                            Name                        </InputGroupText>                        <Input value={name} onChange={e => setName(e.target.value)}/>                    </InputGroup>                    <br/>                    <InputGroup>                        <InputGroupText>                            Description                        </InputGroupText>                        <Input value={description} onChange={e => setDescription(e.target.value)}/>                    </InputGroup>                    <br/>                        <InputGroup>                            <InputGroupText>                                Status                            </InputGroupText>                            <select className="form-select" aria-label="Default select example" value={status}                                    onChange={(e) => setStatus(e.target.value)}>                                {props.statuses.map((el, i) => <option key={i}>{el.toUpperCase()}</option>)}                            </select>                        </InputGroup>                <br/>                    <InputGroup>                        <InputGroupText>                            Priority                        </InputGroupText>                        <select className="form-select" aria-label="Default select example" value={priority}                                onChange={(e) => setPriority(+e.target.value)}>                            {props.priorities.map((el, index) =>                                <option key={index} value={el}>{el}</option>)                            }                        </select>                    </InputGroup>                </ModalBody>                <ModalFooter>                    <Button color="danger" onClick={buttonHandler}>                        Save                    </Button>{' '}                    <Button color="secondary" onClick={props.toggle}>                        Cancel                    </Button>                </ModalFooter>            </Modal>        </p>    );}export default CreateTaskModal;