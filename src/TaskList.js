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
    return (
      var list = []
      for(var title in this.props.tasks) {
        list.push(<TaskNode title={title} />)
      }
      <div className="taskList">
        <h1>{this.props.taskTitle}</h1>
        {list}
      </div>
    )
  }
}
export default TaskList;
