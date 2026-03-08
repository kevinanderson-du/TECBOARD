
import './Style.css'

function Teste_de_props ({ seCadastreAgora }) {
  return(
    <h1>{seCadastreAgora}</h1>
    
  )
}

function Box_de_formulario () {
  return (
    <form className='box'>
      <Teste_de_props seCadastreAgora={"Se cadastre agora!"}/>
        
      
      <h2 className='preencha'>Preencha seus dados:</h2>
      <fieldset className='fieldset'>
        <label className='preencha'>
          Nome:
        </label>

        <input className='caixas_de_texto' type='text' id='nome'/>
      </fieldset>

      <fieldset>
        <label className='preencha'>
          CPF:
        </label>

        <input className='caixas_de_texto' type='text' id='cpf'/>
      </fieldset>

      <fieldset>
        <label className='preencha'>
          Senha:
        </label>

        <input className='caixas_de_texto' type='password' id='senha'/>

        
      </fieldset>
      
      
        <input className='botao' type='button' id='botao' value="Confirmar"/>
        
      

    </form>
  )
}

function Rodape () {
  return (
    <main>
    <footer>
      <p>© 2026 Kevin Anderson</p>
    </footer>
    </main>
  )
}

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
