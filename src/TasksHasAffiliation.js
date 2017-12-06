import React, { Component } from 'react';
import TaskNode from './TaskList'

class TasksHasAffiliation extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [["前半","あいうえお", "かきくけこ", "さしすせそ", "たちつてと", "なにぬねの"],["後半", "はひふへほ", "まみむめも", "やゆよ", "らりるれろ", "わをん"]]
    }
  }
  render() {
    var list = []
    if(this.state.tasks.length >1) {
      for(var task in tasks) {
        if(task.length>1) {
        list.push(<TaskList taskTitle={this.state.tasks[0]} tasks={list.slice(1, tasks.length) /})
        } else {
          list.push(<TaskList taskTitle={this.state.tasks[0]} tasks={[]} /)
        }
      }
    }
    return (
      <div className="tasksHasAffiliation">
        {list}
      </div>
    )
  }
}

export TasksHasAffiliation
