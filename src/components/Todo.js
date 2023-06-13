import React, { useEffect, useState } from 'react'
import { getCategoryFromStorage, getTodoFromStorage, setCategoryInStorage, setTodoInStorage } from '../utils/todo-storage'
import CategoryTodoList from './CategoryTodoList';
import TodoForm from './TodoForm';

const generateRandomId = () => {
    return Math.floor(Math.random() * 100);
}
export const TodoContext = React.createContext()


function Todo() {

    const [todos, setTodos] = useState(getTodoFromStorage())
    const [input, setInput] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("");
    const [categories, setCategories] = useState(getCategoryFromStorage());


    useEffect(() => {
        setTodoInStorage(todos)
    }, [todos]);

    useEffect(() => {
        setCategoryInStorage(categories);
    }, [categories]);


    const addTodo = () => {
        const todosCategory = todos.filter(todo => todo.category === selectedCategory);
        if (todosCategory.length >= 6) {
            alert("Maximum limit of 6 todos reached!");
            return;
        }

        if (input && selectedCategory) {
            const newTodo = {
                id: generateRandomId(),
                text: input,
                completed: false,
                category: selectedCategory
            }
            setTodos((prevTodos) => [...prevTodos, newTodo])
            setInput("");
            setSelectedCategory("");
        }
    }

    return (
        <TodoContext.Provider value={{
            todos,
            setTodos,
            input,
            setInput,
            selectedCategory,
            setSelectedCategory,
            categories,
            setCategories
        }}>
            <div className='todo-container'>
                <div className='header'>
                    <div className='addTodo'>
                        <TodoForm />
                        <button className='todo-button' onClick={addTodo}>Add Todo</button>
                    </div>
                </div>
                <div className='footer'>
                    <div className='categories'>
                        {categories.map((category) => (
                            <div key={category} className="category">
                                <h3>{category}</h3>
                                <CategoryTodoList category={category} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </TodoContext.Provider>
    )
}

export default Todo

