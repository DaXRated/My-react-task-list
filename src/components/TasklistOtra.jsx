import { Component } from "react";
import { useForm } from "react-hook-form";
//import { useState } from "react";



export const TaskList = () => {

    
    const { register, formState:{errors}, handleSubmit } = useForm();

    let onSubmit = (data) =>{
        console.log(data);
    }
    
constructor(props){
    super(props);
    this.task = React.createRef();
}

clicRefs(evento){
    console.log(this.task.current.value)
}

    return <div>
        <h2>Tareas</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input type="text" placeholder="hola" {...register('newTask', {required: true})}/>
                <input type="submit" value="+"/>
                {errors.newTask?.type === 'required' && <p>Debes colocar algo</p>}
            </div>
            <div>
                <h1>{imp}</h1>
            </div>
        </form>
    </div>
}

export default TaskList