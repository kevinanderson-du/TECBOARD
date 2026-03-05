
import './Style.css'

function Box_de_formulario () {
  return (
    <form className='box'>
      <h2>Preencha seus dados:</h2>
      <fieldset className='fieldset'>
        <label>
          Nome:
        </label>

        <input className='caixas_de_texto' type='text' id='nome'/>
      </fieldset>

      <fieldset>
        <label>
          CPF:
        </label>

        <input className='caixas_de_texto' type='text' id='cpf'/>
      </fieldset>

      <fieldset>
        <label>
          Senha:
        </label>

        <input className='caixas_de_texto' type='password' id='senha'/>

        
      </fieldset>
      
      
        <input className='botao' type='button' id='botao' value="Confirmar"/>
        
      

    </form>
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
    </main>
  )
}

export default App
