import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {userActions} from "../redux/slices/UserSlice";
import {useNavigate} from "react-router-dom";
import "./LoginPage.css";
function LoginPage() {
  const [user, setUser] = useState({name: "", password: ""});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginUser = (e) => {
    e.preventDefault();
    dispatch(userActions.setName(user.name));
    dispatch(userActions.toggleLogged());
    navigate("/");
  };
  return (
    <div className="loginPage">
      <form id="formUser" onSubmit={loginUser}>
        <label htmlFor="nameUser" className="margin-form">
          {" "}
          Nome
        </label>
        <input
          type="text"
          value={user.name}
          onChange={(e) => setUser({...user, name: e.target.value})}
          placeholder="Digite seu nome..."
        />
        <label htmlFor="passwordUser" className="margin-form">
          {" "}
          Senha
        </label>
        <input
          type="password"
          value={user.password}
          onChange={(e) => setUser({...user, password: e.target.value})}
          placeholder="Digite sua senha..."
        />
        <button type="submit" id="buttonForm" className="margin-form">
          Logar
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
