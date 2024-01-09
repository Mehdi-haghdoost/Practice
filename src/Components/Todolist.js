import React from 'react'
import { connect, useSelector } from 'react-redux'
import Todo from './Todo';

export default function Todolist() {

  const todos = useSelector((state) => state)
  console.log(todos);

  return (
    <>
    {todos.map(todo => (
        <Todo key={todo.id} {...todo} />
    ))}
    </>
    
  )
}
// function mapStateToProps (state) {
//     console.log('store:', state);
// return {
//     todos : state
// }
// }
// export default connect(mapStateToProps)(Todolist)