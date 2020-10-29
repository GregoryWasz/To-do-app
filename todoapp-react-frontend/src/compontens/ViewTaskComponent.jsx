import React, { Component } from 'react';
import TaskService from '../services/TaskService';

class ViewTaskComponent extends Component {
    constructor (props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            text:'',
            note:'',
        }

    }

    componentDidMount(){
        TaskService.getTaskById(this.state.id).then((res) =>{
            let task = res.data;
            this.setState({text: task.text, 
                note: task.note})
        });
    }

    

    render() {
        return (
            <div className="container">
                <div className="Row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Task View</h3>
                        <div className="card-body">
                            <h4>{this.state.text}</h4>
                            <h5>{this.state.note}</h5>
                            <button className="btn btn-success" onClick={(e) => this.props.history.push('/tasks')}>Back!</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewTaskComponent;