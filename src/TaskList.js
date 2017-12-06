import React, { Component } from 'react';
import TaskNode from './TaskNode'

class TaskList extends Component {
  constructor() {
    super();
    this.state = {
      taskTitle: "宿題"
    }
  }
  render() {
    var list = []
    for(var i in this.props.tasks) {
      list.push(<TaskNode title={this.props.tasks[i]} />)
    }
    return (
      <div className="taskList">
        <h1>{this.props.taskTitle}</h1>
        <div>{list}</div>
      </div>
    )
  }
}
export default TaskList;
