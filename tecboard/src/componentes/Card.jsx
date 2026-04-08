import styles from './card_evento.module.css'

export function Card({evento}) {
    return (
        <div className={styles.card_container}>
            <img className={styles.imagem} src={evento.capa} alt={evento.titulo}/>
            <div className={styles.tag}>
                <p className={styles.tema}>{evento.mini_card.nome} </p>
                <p>
                    {evento.data.toLocaleDateString('pt-BR')}
                </p>
                <h4 className={styles.mulheres_no_front}>{evento.titulo}</h4>
                <h5>{evento.desc}</h5>
            </div>
        </div>
    )
}