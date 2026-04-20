import {Teste_de_props} from './Teste_de_props'
import { Lista_Suspensa } from './Lista_Suspensa'
import styles from './listaSuspensa.module.css'

import './Style.css'

export function Box_de_formulario ({temas}) {

  function aoFormSubmetido(formData){
    
    console.log('opa, ta na hora de criar um evento');

    const evento = {
      capa: formData.get('nome'),
      cpf: formData.get('cpf'),
      
      titulo: formData.get('senha'),

      lista: temas.find(function(item){
        return item.id == formData.get('lista')
      })
    }
    console.log('esse é o evento evento', evento)
  }


  return (
    <form className='box' action={aoFormSubmetido}>
      
        
      <Teste_de_props/>
      <h2 className='preencha'>Preencha seus dados:</h2>
      <fieldset className='fieldset'>
        <label className='preencha'>
          Nome:
        </label>

        <input className='caixas_de_texto' name= 'nome' type='text' id='nome'/>
      </fieldset>

      <fieldset>
        <label className='preencha'>
          CPF:
        </label>

        <input className='caixas_de_texto' type='text' name= 'cpf' id='cpf'/>
      </fieldset>

      <fieldset>
        <label className='preencha'>
          Senha:
        </label>

        <input className='caixas_de_texto' type='password' name='senha' id='senha'/>

        
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