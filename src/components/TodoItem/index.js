// Write your code here

import './index.css'

const TodoItem = props => {
  const {todosDetails, deleteTodo} = props
  const {title, id} = todosDetails

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="list-container">
      <p className="title">{title}</p>
      <button className="delete-button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
