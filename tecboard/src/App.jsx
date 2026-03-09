import {Rodape} from './componentes/Rodape'
import {Box_de_formulario} from './componentes/Box'
import './Style.css'

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
      <div className='div'>
        <h1 className='acesso'>Acesso</h1>
        <h3 className='acesso'>Tenha acesso a vários benefícios exclusivos!</h3>
        <input className='botao' type='button' id='acesso' value={"Acessar"}/>
      </div>
      <Rodape/>
    </main>
  )
}

export default App
