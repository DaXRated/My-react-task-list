import React from "react"
//import React, { useState } from "react";
//import logic from './logic/logic'

class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {value:''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bin(this);
    }
}

handleChange = event =>{
    this.setState({value: event.target.value});
}

handleSubmit = event =>{
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
}


//export function TaskList(){
    render(){
    return( 
<div>
    <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} required></input>
        <input type="submit" value="+"></input>

        {/*<input type="button" value="crear caja de texto" onClick="jeje"></input>*/}
        {/*<label><input type="checkbox"></input>primera tarea</label>*/}
    </form>


      <div>
        <h3>Lista de tareas</h3>
        <h3></h3>
      </div>
        
    
</div>
    )
    
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NameForm />);