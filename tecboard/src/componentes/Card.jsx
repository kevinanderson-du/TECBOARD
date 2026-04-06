import styles from './card_evento.module.css'

export function Card({evento}) {
    return (
        <div>
            <img src={evento.capa} alt={evento.titulo}/>
            <div>
                <p className={styles.tag}>{evento.mini_card.nome} </p>
                <p>
                    {evento.data.toLocaleDateString('pt-BR')}
                </p>
                <h4>{evento.titulo}</h4>
                <h5>{evento.desc}</h5>
            </div>
        </div>
    )
}