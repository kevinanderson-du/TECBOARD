import {Rodape} from './componentes/Rodape'
import {Box_de_formulario} from './componentes/Box_de_formulario'
import './componentes/Style.css'
import { Tema } from './componentes/Tema'
import { Card } from './componentes/Card'



function App() {

  const temas = [
    {
      id: 1, nome: 'front-end'
    },
    {
      id: 2, nome: 'back-end'
    },
    {
      id: 3, nome: 'dev-ops'
    },
    {
      id: 4, nome: 'inteligencia artificial'
    },
    {
      id: 5, nome: 'Data science'
    },
    {
      id: 6, nome: 'cloud'
    }
    
  ]

  const eventos = [
    {
    capa: '/mulheres_no_front.png',
    mini_card: temas[0],
    data: new Date(),
    titulo: 'Mulheres no Front',
    desc: 'Valorizando e impulsionando a participação feminina no desenvolvimento front-end.'}
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
      {temas.map(function(item){
        return (
          <section key={item.id}>
      <Tema tema={item}/>
      <Card evento={eventos[0]}/>
      
      </section>
        )
      })}
      
      {/*<section>
      <Tema tema={temas[0]}/>
      </section>
      <section>
      <Tema tema={temas[1]}/>
      </section>
      <section>
      <Tema tema={temas[2]}/>
      </section>
      <section>
      <Tema tema={temas[3]}/>
      </section>
      <section>
      <Tema tema={temas[4]}/>
      </section>
      <section>
      <Tema tema={temas[5]}/>
      </section>*/}


      <Rodape/>
    </main>
  )
}

export default App
