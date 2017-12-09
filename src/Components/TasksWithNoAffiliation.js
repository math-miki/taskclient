import React, { Component } from 'react';
import TaskNode from './TaskNode'

class TasksWithNoAffiliation extends Component {
  constructor() {
    super();
    this.state = {
      tasks: ["あいうえお", "かきくけこ", "さしすせそ", "たちつてと", "なにぬねの"]
    }
  }
  render() {
    var list = []
    for(var i in this.props.tasks) {
      list.push(<li><TaskNode title={this.props.tasks[i]} /></li>)
    }
    return (
      <div className="tasksWithNoAffiliation">
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}

export default TasksWithNoAffiliation
