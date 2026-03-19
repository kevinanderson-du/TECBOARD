import {Rodape} from './componentes/Rodape'
import {Box_de_formulario} from './componentes/Box_de_formulario'
import './componentes/Style.css'



function App() {

  const temas = [
    {
      id: 1, nome: 'front-end'
    },
    {
      id: 2, nome: 'back-end'
    },
    {
      id: 3, nome: 'back-end'
    },
    {
      id: 4, nome: 'back-end'
    },
    {
      id: 5, nome: 'back-end'
    },
    {
      id: 6, nome: 'back-end'
    }
    
  ]

  return (
    <main>
      <header className='header'>
      <img className='image' src="/Logo.png" alt=''/>
      </header>
      <section className='section'>
        <img className='image' src="/Mulher_Com_Oculos.png" alt=''/>
      </section>
      
      <Box_de_formulario/>
      
      <Rodape/>
    </main>
  )
}

export default App
