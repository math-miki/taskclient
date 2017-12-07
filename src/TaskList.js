import React, { Component } from 'react';
import TaskNode from './TaskNode'
import './style/Common.css'

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
      list.push(<li><TaskNode className="nodeInParent" title={this.props.tasks[i]} /></li>)
    }
    return (
      <div className="tasklistcontent">
        <h1 calssName="titleoftasklist">{this.props.taskTitle}</h1>
        <ul>{list}</ul>
      </div>
    )
  }
}
export default TaskList;
