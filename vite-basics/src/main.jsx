import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const jsObj = {
    
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: 'Click me to visit google'
}

function MyApp() {
    return (
        <div>
            <h1>Custom React App</h1>
        </div>
    )
}

const AnotherElement = (
    <a href="http://google.com" target='_blank'>Visit Expense Tracker</a>
)

const reactElement = React.createElement('a', {href: 'https://expense-tracker-11d68.web.app/', target: '_blank'},
'Click here to visit Expense Tracker Tool')

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
