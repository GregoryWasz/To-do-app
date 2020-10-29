import React, { Component } from 'react';
import TaskService from '../services/TaskService';

class CreateTaskComponent extends Component {
    constructor (props){
        super(props)

        this.state = {
            text:'',
            note:'',
            done: false,
        }

        this.changeTextHandler = this.changeTextHandler.bind(this);
        this.changeNoteHandler = this.changeNoteHandler.bind(this);
        this.saveTask = this.saveTask.bind(this);
    }

    changeTextHandler = (event) => {
        this.setState({text: event.target.value});
    }

    changeNoteHandler = (event) => {
        this.setState({note: event.target.value});
    }

    saveTask = (e) => {
        e.preventDefault();
        let task = {text: this.state.text, note: this.state.note, done: this.state.done};
        
        TaskService.createTask(task).then(res => {
            this.props.history.push('/tasks');
        });
    }

    cancel(){
        this.props.history.push("/tasks");
    }

    render() {
        return (
            <div className="container">
                <div className="Row" style={{marginTop: "30px"}} >
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Task</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Text:</label>
                                    <input placeholder="enter text" name="text" className="form-control"
                                    value={this.state.text} onChange={this.changeTextHandler}/>
                                </div>    
                                <div className="form-group">
                                    <label>Note:</label>
                                    <input placeholder="enter note" name="note" className="form-control"
                                    value={this.state.note} onChange={this.changeNoteHandler}/>
                                </div> 
                            </form>
                            <button className="btn btn-success" onClick={this.saveTask}>Save task</button>
                            <button className="btn btn-danger"  style={{marginLeft: "10px"}} onClick={this.cancel.bind(this)}>Cancel task</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateTaskComponent;