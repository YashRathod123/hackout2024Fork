import styles from '../Styles/Footer.module.scss';
import { NavLink } from 'react-router-dom';

export function FooterContent() {
    return (
        <div className={styles.footerContent}>
            <nav className={styles.footerNav}>
                <NavLink className={( { isActive }) => isActive ? styles.selected : null} to="/privacy">Privacy Policy</NavLink>
                <NavLink className={( { isActive }) => isActive ? styles.selected : null} to="/terms">Terms of Service</NavLink>
                <NavLink className={( { isActive }) => isActive ? styles.selected : null} to="/contact">Contact Us</NavLink>
            </nav>
            <p className={styles.copyright}>&copy; {new Date().getFullYear()} Astro Guide. All rights reserved.</p>
        </div>
    );
}
