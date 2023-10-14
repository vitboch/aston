import Form from './components/form.jsx'
import ChildComponent from './components/child-component.jsx'
import './App.css'
import FetchData from './components/fetch-data.jsx'

function App() {
  const name = 'Intensive ReactJS'
  const number = 26
  const started = true

  return (
    <>
      <Form/>
      <ChildComponent stringProp={name} numberProp={number} booleanProp={started}/>
      <FetchData/>
    </>
  )
}

export default App
