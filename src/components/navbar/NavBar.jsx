import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css"
import { FootballContext } from "../../context/FootballContext";
import { useContext } from 'react';

function NavBar(){
    const { isAuthenticated , isCountrySelected, isPlayerSelected, countryName, selectedCountryId, playerName} = useContext(FootballContext);

    return (
        <nav className={style.nav}>
            <ul>
                { isAuthenticated && 
                <li>
                    <NavLink to="/countries">Countries</NavLink>
                </li>
                }
                { isCountrySelected && 
                <>
                    <span>&gt;</span>
                    <li>
                        <NavLink to={`/countries/${selectedCountryId}`}>  {countryName} Players </NavLink>
                    </li>
                </>
                }
                { isCountrySelected && isPlayerSelected &&
                <>
                    <span>&gt;</span>
                    <li>
                        <NavLink>{playerName}</NavLink> 
                    </li>
                </>
                }
            </ul>
        </nav>
    );
} 

export default NavBar;