import {Teste_de_props} from './Teste_de_props'
import './Style.css'

export function Box_de_formulario () {
  return (
    <form className='box'>
      
        
      <Teste_de_props/>
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

export default Box_de_formulario