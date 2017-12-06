import React, { Component } from 'react';
import TaskNode from './TaskList'

class TasksHasAffiliation extends Component {
  constructor() {
    super();
    this.state = {
      taskTitle: "宿題"
    }
  }
  render() {
    return (
      <div className="tasksHasAffiliation">
        <TaskList />
      </div>
    )
  }
}

export TasksHasAffiliation
