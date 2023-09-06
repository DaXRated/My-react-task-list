import { useState } from "react";


const [taskItems, setTaskItems] = useState([
    {id: 1, name:"primera tarea", done: false},
    {id: 2, name:"segunda tarea", done: false},
    {id: 3, name:"tercera tarea", done: false},
])

function createNewTask(taskName){
    alert(taskName)
    setTaskItems([...taskItems, taskName])
}

export function Task(data){
    return <div>
            <table>
                <thead>
                    <tr>
                        <th>taskes</th>
                    </tr>
                </thead>
                <tbody>
                        {
                        taskItems.map(task => (
                            <tr key={task.id}>
                                <td>
                                {task.name}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            
         </div>  
}

export default Task