import { FooterContent } from "./footercontent";
import styles from '../Styles/Footer.module.scss';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <FooterContent />
        </footer>
    )
}
