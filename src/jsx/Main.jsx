
import '../css/Main.css'
import TodoList from './TodoList.jsx'

function Main() {

  return (
    <>
        <main className={"main"}>
            <section>
                <h2>Todos</h2>
                <TodoList/>
            </section>
        </main>
    </>
  )
}

export default Main
