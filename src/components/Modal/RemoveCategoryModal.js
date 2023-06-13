import React, { useContext, useState } from 'react'
import { TodoContext } from '../Todo';


function RemoveCategoryModal({ isOpen, onClose }) {

    const todoContext = useContext(TodoContext);
    const {
        categories,
        setCategories,
    } = todoContext

    const [removeCategory, setRemoveCategory] = useState("");

    const onChangeRemoveCategory = (e) => {
        setRemoveCategory(e.target.value);
    }

    const onClickRemoveCategory = () => {
        setCategories(categories.filter((remove) => remove !== removeCategory));
        setRemoveCategory("")
    }

    return (
        <div className={`openModal ${isOpen ? 'open' : ''}`}>
            <span className="close" onClick={onClose}>X</span>
            <div className='removeCategory-content'>
                <div className='allCategories'>
                    <p>Categories</p>
                    <ol>
                        {categories.map((category) => (
                            <li key={category}>{category}</li>
                        ))}
                    </ol>
                </div>
                <h2 className='removeH2'>Remove Category</h2>
                <div className='removeCategory-elements'>
                    <input type="text" value={removeCategory} onChange={onChangeRemoveCategory}></input>
                    <button className='remove' onClick={onClickRemoveCategory}>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default RemoveCategoryModal