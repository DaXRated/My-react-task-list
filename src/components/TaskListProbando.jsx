//import { useForm } from "react-hook-form";
import { useState } from "react";
//import ReactDOM from "react-dom/client";

export const TaskList = (props) =>{


        const [ task, setTask ] = useState("");

        const handleSubmit = (e) => {
            e.preventDefault();
            props.createNewTask(task);
            localStorage.setItem('task', task);
            setTask("")
        }

        /*const [taskItems, setTaskItems] = useState([
            {id: 1, name:"primera tarea", done: false},
            {id: 2, name:"segunda tarea", done: false},
            {id: 3, name:"tercera tarea", done: false},
        ])

        function createNewTask(taskName){
            alert(taskName)
            setTaskItems([...taskItems, taskName])
        }*/

        return <div>
            <h2>Tareas</h2>
                <form onSubmit={handleSubmit}>
                    <h2>Nueva Tarea:</h2>
                    <input type="text" placeholder="Agg tarea" value={task} onChange={(e) => {setTask(e.target.value)}}/>
                    <input type="submit" value="+"/>
                </form>
  
        </div>
    }

export default TaskList