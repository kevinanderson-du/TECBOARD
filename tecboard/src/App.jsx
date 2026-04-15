import {Rodape} from './componentes/Rodape'
import {Box_de_formulario} from './componentes/Box_de_formulario'
import './componentes/Style.css'
import { Tema } from './componentes/Tema'
import { Card } from './componentes/Card'
import {CardSimples} from './componentes/CardSimples'



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
    desc: 'Valorizando e impulsionando a participação feminina no desenvolvimento front-end.',
    id: 0},

    {
    capa: '/BATATA.jpg',
    mini_card: temas[1],
    data: new Date(),
    titulo: 'Batatinha',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 1},
    

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



      {/* 1. O map de FORA constrói as Prateleiras (Temas) */}
{temas.map(function(temaAtual) {
  
  // 2. O FILTRO: Vasculha a lista de eventos e guarda só os deste tema
  // Ele compara o ID do tema do evento com o ID da prateleira atual
  const eventosDestaPrateleira = eventos.filter(function(evento) {
    return evento.mini_card.id === temaAtual.id;
  });

  return (
    <section key={temaAtual.id} className="prateleira-section">
      
      {/* Imprime o título e detalhes do Tema */}
      <Tema tema={temaAtual} />

      {/* 3. O map de DENTRO desenha os Cards que passaram no filtro */}
      <div>
        {eventosDestaPrateleira.map(function(eventoAtual) {
          return (
            // Agora sim passamos o evento correto! E usamos o seu novo ID como key.
            <Card key={eventoAtual.id} evento={eventoAtual} />
          );
        })}
      </div>

    </section>
  );
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
