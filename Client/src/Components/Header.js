import { Nav } from "./Nav";
import styles from '../Styles/Header.module.scss';

export function Header() {
    return (
        <header className={styles.header} >
            <Nav />
        </header>
    )
}