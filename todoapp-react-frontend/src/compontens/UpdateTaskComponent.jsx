import React, { Component } from 'react';
import TaskService from '../services/TaskService';

class UpdateTaskComponent extends Component {
    constructor (props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            text:'',
            note:'',
            done: '',
        }

        this.changeTextHandler = this.changeTextHandler.bind(this);
        this.changeNoteHandler = this.changeNoteHandler.bind(this);
        this.updateTask = this.updateTask.bind(this);
    }

    componentDidMount(){
        TaskService.getTaskById(this.state.id).then((res) =>{
            let task = res.data;
            this.setState({text: task.text, 
                note: task.note})
        });
    }

    changeTextHandler = (event) => {
        this.setState({text: event.target.value});
    }

    changeNoteHandler = (event) => {
        this.setState({note: event.target.value});
    }

    updateTask = (e) => {
        e.preventDefault();
        let task = {text: this.state.text, note: this.state.note, done: this.state.done};

        TaskService.updateTask(task, this.state.id).then(res => {
            this.props.history.push('/tasks');
        });

    }

    cancel(){
        this.props.history.push("/tasks");
    }

    render() {
        return (
            <div className="container" style={{marginTop: "30px"}}>
                <div className="Row" >
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Update task</h3>
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
                            <button className="btn btn-success" onClick={this.updateTask}>Save task</button>
                            <button className="btn btn-danger"  style={{marginLeft: "10px"}} onClick={this.cancel.bind(this)}>Cancel task</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateTaskComponent;