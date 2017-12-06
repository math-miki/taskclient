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
        <p>{this.props.title}</p>
      </div>
    );
  }
}
export default TaskNode;
