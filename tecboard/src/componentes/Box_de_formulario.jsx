import {Teste_de_props} from './Teste_de_props'
import { Lista_Suspensa } from './Lista_Suspensa'
import styles from './listaSuspensa.module.css'

import './Style.css'

export function Box_de_formulario ({temas}) {

  function aoFormSubmetido(e){
    e.preventDefault();
    console.log('opa, ta na hora de criar um evento');
  }


  return (
    <form className='box' onSubmit={aoFormSubmetido}>
      
        
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

      <fieldset>
        <label className={styles.lista}>
        <Lista_Suspensa itens={temas}/>
        </label>
      </fieldset>
      
      
        <input className='botao' type='submit' id='botao' value="Confirmar"/>
        
      

    </form>
  )
}

export default Box_de_formulario