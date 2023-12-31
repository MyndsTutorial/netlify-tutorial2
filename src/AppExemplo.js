import "./App.css";
import {useState, useEffect} from "react";
import FunctionSimples from "./exemplos/components/FunctionSimples";
import FunctionDupla from "./exemplos/components/FunctionDupla";
import Botao from "./exemplos/layout/Botao";
function App() {
  // o useState tem como parametro 3 coisas
  // a primeira é uma variavel aonde será armazenada o estado
  // o segundo é a função que vai mudar o valor da variavel
  // e dentro do useState você pode por o valor inicial, seja booleano,string,objeto,array,lista,etc
  // lembre-se, só se pode mudar o valor da variavel pela função
  const [variavel, functionParaMudarValorDaVariavel] =
    useState("valor inicial");
  const [useEffectCounter, setUseEffectCounter] = useState(0);
  // nesse exemplo é legal o aluno trocar o false por true algumas vezes para poder
  // ver o logado e o deslogado aparece em tela
  const [logado, setLogado] = useState(false);

  useEffect(() => {
    console.log("useEffect chamado");
    setUseEffectCounter(useEffectCounter + 1);
  }, [logado]);

  const Logar = () => {
    setLogado(true);
  };

  const Deslogar = () => {
    setLogado(false);
  };
  return (
    <div className="App">
      {/* chamando um componente simples */}
      <FunctionSimples />
      {/* chamando a função dupla */}
      <FunctionDupla />

      <h1>Use effect foi chamado {useEffectCounter} vezes</h1>
      {/* para mostrar um texto vamos usar um if e else ternário  */}
      {/* neste if e else a interrogação significa IF e os dois pontos significa ELSE  */}
      {logado ? <p> Logado </p> : <p>Deslogado</p>}
      {/* chamando o botao 2x e enviando os children como atributos  */}
      {/* chamando o botao 2x e enviando os children como atributos  */}
      <Botao tarefa={Logar} classe="botao purple">
        Entrar
      </Botao>
      <Botao tarefa={Deslogar} classe="botao blue">
        Sair
      </Botao>
    </div>
  );
}

export default App;
