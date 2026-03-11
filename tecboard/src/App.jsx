import {Rodape} from './componentes/Rodape'
import {Box_de_formulario} from './componentes/Box_de_formulario'
import './componentes/Style.css'



function App() {

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
