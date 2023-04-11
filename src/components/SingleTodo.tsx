import React from 'react'
import { Todo } from '../model'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import TodoList from './TodoList'


type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>

}

const SingleTodo = ({todo, todos, setTodos}: Props) => {
    const handleDone = (id: number) => {
        setTodos(todos.map((todo) => todo.id===id?{...todo, isDone: !todo.isDone}:todo))
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
  return (
    <form className='flex justify-evenly'>
        {
            todo.isDone? (

                <s className="bg-yellow-400 h-8 rounded-lg flex justify-evenly text-xl ">{todo.todo}
                    <div className='flex justify-evenly mt-1 ml-3'>
                        
                        <span>
                            <AiFillDelete />
                        </span>
                        <span onClick={() => handleDone(todo.id)}>
                            <MdDone />
                        </span>
                    </div>
                </s>
            ): (
                <span className="bg-yellow-400 h-8 rounded-lg flex justify-evenly text-xl ">{todo.todo}
                    <div className='flex justify-evenly mt-1 ml-3'>
                        <span onClick={() => handleDelete(todo.id)}>
                            <AiFillDelete />
                        </span>
                        <span onClick={() => handleDone(todo.id)}>
                            <MdDone />
                        </span>
                    </div>
                </span>
            )
        }
        
       
        
    </form>
  )
}

export default SingleTodo