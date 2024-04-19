
import '../css/Main.css'
import TodoList from 'jsx/TodoList.jsx'

function Main() {

  return (
    <>
        <main className={"main"}>
            <section className={"addSome"}>
                <input id={"addText"} type={"text"} placeholder={"Add a new todo"}/>
                <button id={"add"}>Add</button>
            </section>
            <hr/>
            <section>
                <h2>Todos</h2>
                <TodoList/>
            </section>
        </main>
    </>
  )
}

export default Main
