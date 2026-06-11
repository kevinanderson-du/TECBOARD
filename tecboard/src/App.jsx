import {Rodape} from './componentes/RODAPE/Rodape'
import {Box_de_formulario} from './componentes/Box_de_formulario'
import './componentes/Style.css'
import { Tema } from './componentes/Tema'
import { Card } from './componentes/Card'


{/*import { Cadastro } from './componentes/Cadastro'*/}






function App() {

  {/*const batata = [{
    id: 1, name: "Gustavo"},

    {id: 2, name: "Jessica"},

    {id: 3, name: "Kevin"}
  ]*/}

  const temas = [
    {
      id: 1, nome: 'Front-end'
    },
    {
      id: 2, nome: 'Back-end'
    },
    {
      id: 3, nome: 'Dev-ops'
    },
    {
      id: 4, nome: 'Inteligência Artificial'
    },
    {
      id: 5, nome: 'Data Science'
    },
    {
      id: 6, nome: 'Cloud'
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
    capa: '/BACK-END.png',
    mini_card: temas[1],
    data: new Date(),
    titulo: 'Back-End Masters',
    desc: "Performance e inovação no back-end, conectando especialistas e entusiastas.",
    id: 1},

    {
    capa: '/DEVOPS.png',
    mini_card: temas[2],
    data: new Date(),
    titulo: 'DevOps Evolution',
    desc: "Congresso sobre automação, CI/CD, cultura DevOps, tendências e inovações.",
    id: 2},

    {
    capa: '/ROBO-PENSANDO.png',
    mini_card: temas[3],
    data: new Date(),
    titulo: 'Deep Learning Days',
    desc: "Imersão sobre IA, redes neurais e aprendizado profundo.",
    id: 3},

    {
    capa: '/DATA-PULSE.png',
    mini_card: temas[4],
    data: new Date(),
    titulo: 'Data Pulse',
    desc: "Congresso sobre dados nas decisões estratégicas, análise e inovações da ciência de dados.",
    id: 4},

    {
    capa: '/SKYTECH.png',
    mini_card: temas[5],
    data: new Date(),
    titulo: 'SkyTech Summit',
    desc: "Palestra sobre tendências em computação em nuvem, escalabilidade e infraestrutura.",
    id: 5},
    

  ]

  return (
    <main>
      <header className='header'>
      <img className='image' src="/Logo.png" alt=''/>
      </header>
      <section className='section'>
        <img className='image' src="/Mulher_Com_Oculos.png" alt=''/>
      </section>
      
      <Box_de_formulario temas={temas}/>


    {/*TREINANDO A UTILIZAÇÃO DO MAP*/ }


      {/*{batata.map((item) => (
        <section key={item.id}>
          <Cadastro listaCadastro={item}/>
        </section>
      ))}*/}



      {/* 1. O map de FORA constrói as Prateleiras (Temas) */}
{temas.map(function(temaAtual) {
  
  // 2. O FILTRO: Vasculha a lista de eventos e guarda só os deste tema
  // Ele compara o ID do tema do evento com o ID da prateleira atual
  const eventosDestaPrateleira = eventos.filter(function(evento) {
    return evento.mini_card.id === temaAtual.id;
  });

  return (
    <section key={temaAtual.id}>
      
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
