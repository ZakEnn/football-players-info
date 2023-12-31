import { useContext, useState } from "react";
import style from './LoginForm.module.css';
import { useNavigate } from "react-router-dom";
import { FootballContext } from "../../context/FootballContext";

function LoginForm(){    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isEnable, setEnable] = useState(true);
    const {setIsAuthenticated} = useContext(FootballContext);

    const handleKeyUp = () => {
      if (username.length > 0 && password.length > 0) setEnable(false);
      else setEnable(true);
    };

    const navigate = useNavigate();

    const onSubmit = (username, password) => {
        setIsAuthenticated(true);
        navigate(`/countries`);
    };

    return (
      <div className={style.login}>
        <h2>FIFA</h2>
        <label>User Name</label>
        <input
          type="text"
          id="username-input"
          placeholder="username"
          value={username}
          onKeyUp={handleKeyUp}
          onChange={(event) => setUsername(event.target.value)}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          id="password-input"
          placeholder="Password"
          onKeyUp={handleKeyUp}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <button
          type="submit"
          id="button-input"
          disabled={isEnable}
          onClick={() => onSubmit(username, password)}
        >
          Login
        </button>
      </div>
    );
}

export default LoginForm;