
import './Style.css'

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

      <fieldset>
        <label>
          CPF:
        </label>

        <input type='text' id='cpf'/>
      </fieldset>

      <fieldset>
        <label>
          Senha:
        </label>

        <input type='password' id='senha'/>

        
      </fieldset>
      
      
        <input className='botao' type='button' id='botao' value="Botao"/>
        
      

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
