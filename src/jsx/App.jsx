import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from '../jsx/Main.jsx'
import Header from '../jsx/Header.jsx'
import '../css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
            <Header/>
            <Main/>
    </React.StrictMode>,
)
