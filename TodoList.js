import React from 'react'

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.update=this.update.bind(this)
    this.captureEnterKey=this.captureEnterKey.bind(this)
    this.state = {
      todoItems: [],
      value: ''

    }
  }
  update(e) {
    this.setState({value:e.target.value})
  }
  captureEnterKey(e) {
    if (e.charCode === 13) {
      var todoItems = this.state.todoItems
      todoItems.push(e.target.value)

      this.setState({
        value: '', todoItems: todoItems
      })
    }
  }
  render() {
    var todoItems = this.state.todoItems.map((todoItem, i) => {
      return <li className="listItems" key={i}>{todoItem}</li>
    })

    return <div>
        <input type="text" value={this.state.value} onChange={this.update} onKeyPress={this.captureEnterKey} />
        <ul>
          {todoItems}
        </ul>
    </div>
  }
}

var TodoItem = (props) => <li>{props.children}</li>

export default TodoList
