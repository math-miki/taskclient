import React, { Component } from 'react';

class TaskNode extends Component {
  constructor() {
    super();
    this.state = {
      taskTitle: "眠る"
    }
  }
  render() {
    return (
      <div className="taskNode">
        {this.state.taskTitle}
      </div>
    );
  }
}
export default TaskNode;
