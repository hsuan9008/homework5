import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ListItem from './App';
import * as serviceWorker from './serviceWorker';
import Title from "./title"

class TodoList extends Component {
  constructor() {
    super()
    this.state = {
      list: [],
      inputVal: ''
    }
  }
  addTask() {
    if (!this.state.inputVal) return
    this.setState({
      list: [...this.state.list, {
        name: this.state.inputVal,
        status: 0
      }],
      inputVal: ''
    })
  }
  handleChange(e) {
    this.setState({
      inputVal: e.target.value
    })
  }
  deleteItem(name) {
    const data = this.state.list.filter(element => element.name !== name)
    this.setState({
      list: data
    })
  }
  completeTask(name) {
    const TodoList = []
    this.state.list.forEach((element, index) => {
      if (element.name === name) {
        const item = this.state.list[index]
        TodoList.push(Object.assign({}, item, {status: item.status === 0 ? 1 : 0}))
        this.setState({
          list: TodoList
        })
      } else {
        TodoList.push(element)
      }
    })
  }

  render() {
    return (
      <div className="reactTodoList">
      <Title/>
      <ListItem data={this.state.list} deleteItem={this.deleteItem.bind(this)}
        completeTask={this.completeTask.bind(this)}/>
      <footer>
        <input type="text" value={this.state.inputVal} onChange={this.handleChange.bind(this)} placeholder="添加todo"></input>
        <button className="addTodo" onClick={this.addTask.bind(this)}>添加</button>
      </footer>
    </div>
    )
  }
}
ReactDOM.render(
  <TodoList />,
  document.getElementById('root')
)
serviceWorker.unregister();
