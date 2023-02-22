import styles from './Rodape.module.css';
import { ReactComponent as Marcaregistrada } from 'assets/marca_registrada.svg'

export default function Rodape(){
    return (
        <footer className={styles.rodape}>
            <Marcaregistrada/>
            Desenvolvido por Alura.
        </footer>
    )
}