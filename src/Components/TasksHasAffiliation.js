import React, { Component } from 'react';
import TaskList from './TaskList'
import './../style/Common.css'

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
    if(this.props.tasks.length>1) {
      for(var i in this.props.tasks) {
        if(this.props.tasks[i].length>1) {
        list.push(<TaskList className="listwithaffiliation" taskTitle={this.props.tasks[i][0]} tasks={this.props.tasks[i].slice(1, this.props.tasks[i].length)} />)
        } else {
          list.push(<TaskList className="listwithaffiliation" taskTitle={this.props.tasks[i][0]} tasks={[]} />)
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
