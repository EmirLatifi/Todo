export const setTodoInStorage = (todo) => {
    const stringifiedTodo = JSON.stringify(todo)
    localStorage.setItem("todo", stringifiedTodo)
}

export const getTodoFromStorage = () => {
    const storedTodo = localStorage.getItem("todo");
    return storedTodo ? JSON.parse(storedTodo) : [];

}

export const setCategoryInStorage = (category) => {
    const stringifiedCategory = JSON.stringify(category);
    localStorage.setItem('category', stringifiedCategory);
    console.log(category)
}

export const getCategoryFromStorage = () => {
    const storedCategory = localStorage.getItem('category');
    console.log(storedCategory)
    return storedCategory ? JSON.parse(storedCategory) : [];
}