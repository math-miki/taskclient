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
    for(var title in this.state.tasks) {
      list.push(<TaskNode title={title} />)
    }
    return (
      <div className="tasksWithNoAffiliation">
        {list}
      </div>
    )
  }
}

export TasksWithNoAffiliation
