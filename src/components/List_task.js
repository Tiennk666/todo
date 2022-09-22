import React, { Component } from "react";
import AddTask from "./Add_task";

class List_task extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: ['Task 1', 'Task 2'],
            showAddForm: false,
        }
    }
    setStatus = () => {
        this.setState({
            showAddForm: true
        })
    }
    closeForm = () => {
        this.setState({
            showAddForm: false,
            showEditForm: false
        })
    }
    addTask = (name) => {
        this.state.tasks.push(name)
        this.forceUpdate()
    }
    render() {
        if (this.state.showAddForm === true) {
            return (
                <AddTask addTask={this.addTask} closeForm={this.closeForm} />
            )
        } else {
            return (
                <div className="container">
                    <br />
                    <br />
                    <button type="button" className="btn btn-outline-primary" onClick={this.setStatus} >Add Task</button>
                    <h2>List Task</h2>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name of task</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.tasks.map(function (name, index) {
                                    return <div>{name }</div>
                                }.bind(this))
                            }
                        </tbody>
                    </table>
                </div>
            );
        }
    }
}

export default List_task;
