import React, { useState, useContext } from 'react'
import AddCategoryModal from './Modal/AddCategoryModal';
import { TodoContext } from './Todo'
import RemoveCategoryModal from './Modal/RemoveCategoryModal';


function TodoForm() {
    const todoContext = useContext(TodoContext);
    const {
        input,
        setInput,
        selectedCategory,
        setSelectedCategory,
        categories,
    } = todoContext

    const [addCategoryModal, setAddCategoryModal] = useState(false);
    const [removeCategoryModal, setRemoveCategoryModal] = useState(false);

    const getTodosText = (e) => {
        setInput(e.target.value)
    }

    const onChangeSelectCategory = (e) => {
        setSelectedCategory(e.target.value)
    }

    const onClickAddCategoryOpenModal = () => {
        setAddCategoryModal(true)

    }
    const onClickRemoveCategoryModal = () => {
        setRemoveCategoryModal(true)

    }
    const onClickAddCategoryCloseModal = () => {
        setAddCategoryModal(false)
    }

    const onClickRemoveCategoryCloseModal = () => {
        setRemoveCategoryModal(false)
    }

    return (
        <>
            <input className='todo-input' type="text" value={input} onChange={getTodosText} placeholder="Add a text"></input>
            <div className='todo-option'>
                <select value={selectedCategory} onChange={onChangeSelectCategory}>
                    <option>Select a category</option>
                    {categories.map((category) => (
                        <option className='options' key={category} value={category}>{category}</option>
                    ))}
                </select>
                <div className='buttons'>
                    <button className='addCategory' onClick={onClickAddCategoryOpenModal}>+</button>
                    <button className='removeCategory' onClick={onClickRemoveCategoryModal}>-</button>
                </div>
            </div>
            <AddCategoryModal isOpen={addCategoryModal} onClose={onClickAddCategoryCloseModal} />
            <RemoveCategoryModal isOpen={removeCategoryModal} onClose={onClickRemoveCategoryCloseModal} />
        </>
    )
}

export default TodoForm