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
      for(var title in this.state.tasks) {
        list.push(<TaskNode title={title} />)
      }
      <div className="taskList">
        {list}
      </div>
    )
  }
}
export default TaskList;
