import React, { Component } from 'react';
import './../style/Common.css'

class TaskNode extends Component {
  constructor() {
    super();
    this.state = {
      taskTitle: "眠る"
    }
  }
  render() {
    return (
      <div className="taskNodeContent">
        <p>{this.props.title}</p>
      </div>
    );
  }
}
export default TaskNode;
