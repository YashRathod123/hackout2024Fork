import styles from '../Styles/Nav.module.scss'
import logo from '../Assets/shared/logo.svg';
import hamburgerClosed from '../Assets/shared/icon-hamburger.svg';
import hamburgerOpen from '../Assets/shared/icon-close.svg'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export function Nav() {

    const [open, setOpen] = useState(false);

    function handleClick(e) {
        e.preventDefault();
        setOpen(!open);
    }



    return (
        <nav className={styles.nav}>
            <img className={styles.logo} src={logo} alt="Space Tourism Logo" />
            <span className={styles.line}></span>
            <div className={open ? `${styles.navMenu} ${styles.open}` : styles.navMenu}>
                <NavLink className={( { isActive }) => isActive ? styles.selected : null} to="/"><span>00</span>HOME</NavLink>
                
                <NavLink className={( { isActive }) => isActive ? styles.selected : null} to="destination"><span>01</span>Explore</NavLink>
                <NavLink className={( { isActive }) => isActive ? styles.selected : null} to="crew"><span>02</span>Question</NavLink>
                {/* <NavLink className={( { isActive }) => isActive ? styles.selected : null} to="technology"><span>03</span>TECHNOLOGY</NavLink> */}
            </div>
            <button onClick={(e) => handleClick(e)} className={styles.navButton}>
                {open ? <img className={styles.hamburgerOpen} src={hamburgerOpen} alt="Open Hamburger icon" /> : <img className={styles.hamburgerClosed} src={hamburgerClosed} alt="Closed Hamburger icon" />}
            </button>
        </nav>
    )
    
}