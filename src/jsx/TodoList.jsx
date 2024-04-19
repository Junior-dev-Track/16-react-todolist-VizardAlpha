

export default function TodoList() {
    const todos = ["My first todo", "My second todo"];
    return (
        <>
            <ul>
                {todos.map((todo) => (
                    <li>
                        <input type="checkbox"/>
                        <span>{todo}</span>
                        <button id={"done"}>Done</button>
                        <button id={"edit"}>Edit</button>
                        <button id={"delete"}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
}