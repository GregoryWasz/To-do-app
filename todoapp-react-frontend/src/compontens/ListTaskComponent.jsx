import React, { Component } from 'react';
import TaskService from '../services/TaskService';

class ListTaskComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            tasks: []
        }
        this.createTask = this.createTask.bind(this);
    }

    createTask(){
        this.props.history.push("/create-task");
    }

    componentDidMount(){
        TaskService.getTasks().then((res) =>{
            this.setState({ tasks: res.data});
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Task list</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.createTask}>Add task</button>
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
                                        <td>{task.done}</td>
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