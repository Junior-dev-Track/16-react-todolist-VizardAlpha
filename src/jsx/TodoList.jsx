import { useState } from "react";

export default function TodoList() {




    // si cliquer sur edit button alors modifier la todo.
    // si cliquer sur supprimer d'une todo alors supprimer le todo si done est sur true.
    // si cliquer sur supprimer d'une todo et que done est sur false alors afficher un message d'erreur.
    // si cliquer sur supprimer toutes les todos alors supprimer tous les todos.






    const [todos, setTodos] = useState([]);
    const [addText, setAddText] = useState("");

    const handleAddTodo = () => {
        if(addText === "") {
            alert("Please enter a todo");
        } else {
            setTodos([...todos, {
                id: todos.length + 1,
                name: addText,
                done: false
            }]);

            setAddText("");
        }

    }

    const handleAddText = (e) => {
        setAddText(e.target.value);
    }

    const handleEdit = (e) => {

    }

    const handleDelete = () => {

    }

    const handleCheck = (id) => {
        setTodos( todos.map( todo => {
            if(todo.id === id) {
                return {
                    ...todo,
                    done: !todo.done
                }
            }
        return todo
        }))
    }

    return (
        <>
            <section className={"addSome"}>
                <input value={addText} type={"text"} placeholder={"Add a new todo"} onChange={handleAddText}/>
                <button onClick={handleAddTodo}>Add</button>
            </section>
            <hr/>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            id={todo.id}
                            name={todo.name}
                            checked={todo.done}
                            onChange={() => handleCheck(todo.id)}/>
                        <span contentEditable="false">{todo.name}</span>
                        <button id={"edit"} onClick={handleEdit}>Edit</button>
                        <button id={"delete"} onClick={handleDelete}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
}