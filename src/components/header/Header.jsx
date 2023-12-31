import logo from '../../fifa.png';
import style from './Header.module.css';

function Header(){
    return (
        <header className={style.header}>
           <img src={logo} alt="logo" width={70} height={30} />
        </header>
    );
} 

export default Header;