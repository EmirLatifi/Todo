import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import { TodoContext } from './Todo';

function CategoryTodoList({ category }) {

    const todoContext = useContext(TodoContext);
    const {
        todos,
        setTodos,
    } = todoContext;

    const onClickComplete = (id) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed }
                }
                return todo;
            })
        )
    }

    const onClickDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const currentTodos = todos.filter((todo) => todo.category === category);

    return (
        <ul className="todo-ul">
            {currentTodos.map((todo_li) => (
                <li className={`todo-li ${todo_li.completed ? "completed" : ""}`} key={todo_li.id}>
                    {todo_li.text}
                    <div className="icons">
                        <FontAwesomeIcon icon={faCheck} onClick={() => onClickComplete(todo_li.id)} className="completeIcon" />
                        <FontAwesomeIcon icon={faTrash} onClick={() => onClickDelete(todo_li.id)} className="deleteIcon" />
                    </div>
                </li>
            ))}
        </ul>
    )

}

export default CategoryTodoList