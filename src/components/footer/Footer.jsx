import logo from '../../pln.png';
import style from './Footer.module.css';

function Footer(){
    return (
        <footer className={style.footer}>
            <img src={logo} alt="logo" width={160} height={80} />
        </footer>
    );
} 

export default Footer;