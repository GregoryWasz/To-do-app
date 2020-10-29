import React, { Component } from 'react';
import TaskService from '../services/TaskService';


class ListTaskComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            tasks: []
        }
        this.createTask = this.createTask.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.viewTask = this.viewTask.bind(this);
        this.doneTask = this.doneTask.bind(this);
    }

    doneTask(id){
        this.props.history.push(`/done-task/${id}`)
    }
    viewTask(id){
        this.props.history.push(`/view-task/${id}`)
    }

    updateTask(id){
        this.props.history.push(`/update-task/${id}`);
    }

    createTask(){
        this.props.history.push("/create-task");
    }
    
    deleteTask(id){
        TaskService.deleteTask(id).then( res => {
            this.setState({tasks: this.state.tasks.filter(task => task.id !== id)});
        });
    }

    componentDidMount(){
        TaskService.getTasks().then((res) =>{
            this.setState({ tasks: res.data});
        });
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Task list</h1>
                <div className="row" style={{marginBottom: "10px"}}>
                    <button className="btn btn-success btn-block" onClick={this.createTask}>Add task</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Task text</th>
                                <th>Task note</th>
                                <th>Task done</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.tasks.map(
                                    task =>
                                    <tr key={task.id}>
                                        <td>{task.text}</td>
                                        <td>{task.note}</td>
                                        <td>{String(task.done)}</td>
                                        <td>
                                            <button className="btn btn-primary" onClick={() => this.updateTask(task.id)}>Update</button>
                                            <button className="btn btn-warning" style={{marginLeft: "10px"}} onClick={() => this.viewTask(task.id)}>View</button>
                                            <button className="btn btn-danger" style={{marginLeft: "10px"}} onClick={() => this.deleteTask(task.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListTaskComponent;