import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Juninho_Pernambucano.css'

function Box_de_formulario () {
  return (
    <form className='box'>
      <h2>Preencha seus dados:</h2>
      <fieldset>
        <label>
          Nome:
        </label>
        <input type='text' id='nome'/>
      </fieldset>
    </form>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <header>
      <div>
        <h1>Hello world</h1>
      </div>
      </header>
      <Box_de_formulario/>
    </main>
  )
}

export default App
