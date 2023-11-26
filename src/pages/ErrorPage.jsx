import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";

function ErrorPage() {
  const isLogged = useSelector((state) => state.user.isLogged);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged === false) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <h1>Página não encontrada</h1>
      <h4>
        <Link to="/">Voltar a página inicial</Link>
      </h4>
    </div>
  );
}

export default ErrorPage;
