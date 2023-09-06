import { useState } from 'react'
//import './app.css'
import {Header} from './components/Header'
import {TaskList} from './components/TaskListProbando'
import '../src/main.css'
//import {createNewTask} from './components/TaskListProbando'
//import Task from './components/Task'


function App() {
 
    const [ taskItems, setTaskItems ] = useState([])
    
    function createNewTask(taskName){
        alert(taskName)
        setTaskItems([...taskItems, {name: taskName, done: false}])
    }

 return (
    <div className="appbody">
        <Header/>
        <TaskList createNewTask={createNewTask}/>
        <div className="tabname">
                    <table >
                        <thead>
                            <tr>
                                <th>taskes:</th>
                            </tr>
                        </thead>
                        <tbody>
                                {
                                taskItems.map(task => (
                                    <tr key={task.name}>
                                        <td>
                                        {task.name}
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    
                </div> 
    </div>
 )
}

export default App 