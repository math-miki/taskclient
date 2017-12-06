import React, { Component } from 'react';

class TaskNode extends Component {
  constructor() {
    super();
    this.state = {
      taskTitle: "眠る"
    }
    this.
  }
  render() {
    return (
      <div className="taskNode">
        {this.props.title}
      </div>
    );
  }
}
export default TaskNode;
