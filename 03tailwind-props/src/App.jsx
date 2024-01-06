import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='text-3xl bg-blue-500 p-3 rounded-md'>Vite with Tailwind</h1>
      <Card username='Aishwarya' image='https://images.pexels.com/photos/556669/pexels-photo-556669.jpeg?auto=compress&cs=tinysrgb&w=400'/>
      <Card username='Anahita' designation='SDE II' image='https://images.pexels.com/photos/1204135/pexels-photo-1204135.jpeg?auto=compress&cs=tinysrgb&w=400'/>
      <Card username='Prarthana' designation='Engineering Manager'/>
    </>
  )
}

export default App
