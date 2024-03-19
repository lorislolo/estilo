import styles from './Paragrafo.module.css'

function Paragrafo(props) {
    return(
        <div>
            <p><h1 className={styles.paragrafoTitulo}>{props.Titulo}</h1>
            </p>
            <p>
                {props.Texto}
            </p>
        </div>
    )
}

export default Paragrafo