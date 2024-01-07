import React from 'react'
import { Connect, connect } from 'react-redux'
import Todo from './Todo';
function Todolist(props) {
    console.log('props:',props);
  return (
    <>
    {props.todos.map(todo => (
        <Todo key={todo.id} {...todo} />
    ))}
    </>
    
  )
}
function mapStateToProps (state) {
    console.log('store:', state);
return {
    todos : state
}
}
export default connect(mapStateToProps)(Todolist)