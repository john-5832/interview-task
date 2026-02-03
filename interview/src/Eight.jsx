import { useState } from "react";

function TodoApp() {

    const [todos, setTodos] = useState([
        { id: 1, text: "Walk Dog" },
        { id: 2, text: "Buy Milk" },
    ]);

    const RemoveTodo = (id) => {
        setTodos(prevTodos =>
            prevTodos.filter(todo => todo.id == id)
        );
    };

    return (
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    <input defaultValue={todo} />
                    <button onClick={() => RemoveTodo(index)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default TodoApp;