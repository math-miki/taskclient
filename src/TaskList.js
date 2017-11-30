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
      <div className="taskList">
        <TaskNode />
        <TaskNode />
      </div>
    )
  }
}
export default TaskList;
