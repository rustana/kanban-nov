// import {v4 as uuidv4} from 'uuid';
import './App.css';
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Column from "./Column";
import {Button} from "reactstrap";
import CreateTaskModal from "./CreateTaskModal";

function App() {
    const cards = [
        {
            id: 1,
            name: "Learn JS",
            priority: 5,
            status: "todo",
            description: "Learn function"
        },
        {
            id: 2,
            name: "Learn React",
            priority: 3,
            status: "progress",
            description: "Learn hooks"
        },
        {
            id: 3,
            name: "Learn Server",
            priority: 4,
            status: "done",
            description: "Learn todo"
        },
        {
            id: 4,
            name: "Learn CSS",
            priority: 1,
            status: "review",
            description: "Learn grid"
        }
    ]
    const [tasks, setTasks] = useState(cards)
    const [statuses, setStatuses] = useState(["todo", "progress", "review", "done"])
    const [open, setOpen] = useState(false)

    const priorities = [1, 2, 3, 4, 5]
    // const [priority, setPriority]=useState(value)


    const changePriority = (id, value) => {
        const updatedTasks = tasks.map(el => id === el.id ? {...el, priority: el.priority + value} : el)
        setTasks(updatedTasks)

    }
    const changeStatus = (id, value) => {
        const findStatusIndex = statuses.indexOf(tasks.find(el => el.id === id).status)
        console.log(findStatusIndex)
        const updatedTasks = tasks.map(el => el.id === id ? {...el, status: statuses[findStatusIndex + value]} : el)
        setTasks(updatedTasks)
    }
    const deleteTask = (id) => {
        const updatedTask = tasks.filter(el => el.id !== id)
        setTasks(updatedTask)
    }
    const updateTask = (id, card) => {
        const updatedTask=tasks.map(el => el.id === id ? {...card} : el)
        setTasks(updatedTask)
        console.log(updatedTask)
    }
    const createUpdateButton = (newCard) => {
        const updatedTasks = [...tasks, newCard]
        setTasks(updatedTasks)
    }
    const toggle = () => {
        setOpen(!open)
    }


    // id:uuidv4(), name:card.name, description:card.description, status:card.status, priority:card.priority

    return (
        <div className="App">
            <h1>Kanban</h1>
            <CreateTaskModal
                statuses={statuses}
                cards={cards}
                open={open}
                priorities={priorities}
                createUpdateButton={createUpdateButton}
                toggle={toggle}/>
            <div className="text-center">
                <div className="row align-items-start">

                    {statuses.map((el, i) =>
                        <Column key={i}
                                status={el}
                                cards={tasks}
                                changePriority={changePriority}
                                changeStatus={changeStatus}
                                deleteTask={deleteTask}
                                updateTask={updateTask}
                                statuses={statuses}
                                priorities={priorities}

                        />)}

                </div>
            </div>
        </div>
    );
}

export default App;
