import styles from './Card.module.css'

function Card(props){
    return(
        <div className={styles.fundo}>
            <div >
                <img className={styles.img} src={props.Url}></img>
            </div>
            <div className={styles.titulo}>{props.Titulo}</div>
            <div className={styles.texto}>{props.Texto}</div>
            <a className={styles.link} href={props.Link}>{props.TextoLink}</a>
        </div>
    )
}

export default Card