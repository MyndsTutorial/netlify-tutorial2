import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {userActions} from "../redux/slices/UserSlice";
import {useNavigate} from "react-router-dom";
import "./LoginPage.css";
import {validatePassword} from "../hooks/validatePassword";
import Popup from "../components/Popup";
function LoginPage() {
  const [user, setUser] = useState({name: "", password: ""});
  const [popupContent, setPopupContent] = useState({message: "", color: ""});
  const [showPopup, setShowPopup] = useState(false);
  function showAndHidePopup(message, color) {
    setPopupContent({message, color});
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3500);
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginUser = (e) => {
    e.preventDefault();
    let passwordValid = validatePassword(user.password);
    if (user.name.length < 6) {
      showAndHidePopup("Seu usuário tem menos de 6 digitos", "purple");
      return;
    }
    if (!passwordValid) {
      showAndHidePopup("Sua senha não passa nos requisitos", "purple");
      return;
    }
    dispatch(userActions.setName(user.name));
    dispatch(userActions.toggleLogged());
    navigate("/");
  };

  useEffect(() => {}, []);
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
      {showPopup ? (
        <Popup message={popupContent.message} color={popupContent.color} />
      ) : null}
    </div>
  );
}

export default LoginPage;
