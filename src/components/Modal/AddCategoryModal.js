import React, { useState, useContext } from 'react'
import { TodoContext } from '../Todo';

const AddCategoryModal = ({ isOpen, onClose }) => {

    const todoContext = useContext(TodoContext);
    const {
        categories,
        setCategories,
    } = todoContext

    const [newCategory, setNewCategory] = useState("");

    const onClickAddCategory = () => {
        if (newCategory.length >= 3) {
            const updatedCategories = [...categories, newCategory];
            setCategories(updatedCategories)
            setNewCategory("");
        }
        else {
            return alert("There is no text or text is shorter than 3 letters")
        }
    }

    const onChangeAddCategory = (e) => {
        setNewCategory(e.target.value);
    }

    return (
        <div className={`openModal ${isOpen ? 'open' : ''}`}>
            <div className="close" onClick={onClose}>X</div>
            <div className='addCategory-content'>
                <div className='allCategories'>
                    <p>Categories</p>
                    <ol>
                        {categories.map((category) => (
                            <li key={category}>{category}</li>
                        ))}
                    </ol>
                </div>
                <h2 className='addH2'>Add Category</h2>
                <div className="addCategory-elements">
                    <input type="text" value={newCategory} onChange={onChangeAddCategory}></input>
                    <button className='add' onClick={onClickAddCategory}>Add</button>
                </div>
            </div>
        </div>
    );
};

export default AddCategoryModal;