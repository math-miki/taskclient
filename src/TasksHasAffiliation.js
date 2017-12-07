import React, { Component } from 'react';
import TaskList from './TaskList'
import './style/Common.css'

class TasksHasAffiliation extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        ["前半","あいうえお", "かきくけこ", "さしすせそ", "たちつてと", "なにぬねの"],
        ["後半", "はひふへほ", "まみむめも", "やゆよ", "らりるれろ", "わをん"],
        ["アルファベット", "abcdefg", "hijklmn", "opqrstu", "vwxyz"],
        ["alphabet", "ABCDEFG", "HIJKLMN", "OPQRSTU", "VWXYZ"]
      ]
    }
  }
  render() {
    var list = []
    if(this.state.tasks.length>1) {
      for(var i in this.state.tasks) {
        if(this.state.tasks[i].length>1) {
        list.push(<TaskList className="listwithaffiliation" taskTitle={this.state.tasks[i][0]} tasks={this.state.tasks[i].slice(1, this.state.tasks[i].length)} />)
        } else {
          list.push(<TaskList className="listwithaffiliation" taskTitle={this.state.tasks[i][0]} tasks={[]} />)
        }
      }
    }
    return (
      <div className="tasksHasAffiliation clearfix">
        {list}
      </div>
    )
  }
}

export default TasksHasAffiliation
