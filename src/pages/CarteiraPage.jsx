import React, {useEffect, useState} from "react";
import "./CarteiraPage.css";
import useCountStore from "../zustand/Count";
import useMoneyStore from "../zustand/Carteira";
import "./CarteiraPage.css";

function CarteiraPage() {
  const count = useCountStore((state) => state.count);

  const increment = useCountStore((state) => state.increment);
  const decrement = useCountStore((state) => state.decrement);
  const {carteiraState, fetchMoneyData, addTransaction} = useMoneyStore();
  const [types, setTypes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const allTypes = await fetchMoneyData();
        setTypes(allTypes);
      } catch (error) {
        console.error("Error fetching money data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="carteira">
        <div>
          <div> Contador: {count}</div>
          <button
            onClick={decrement}
            className="buttonsCounter color-red-ButtonCounter"
          >
            Diminuir
          </button>
          <button
            onClick={increment}
            className="buttonsCounter color-purple-ButtonCounter"
          >
            Aumentar
          </button>
        </div>
        <div>
          <h1>Minha Carteira</h1>
          <form action="">
            <div>
              <input type="text" placeholder="Valor..." />
              <select>
                <option>Gasto</option>
                <option>Entrada</option>
              </select>
              <select>
                {types.map((t) => (
                  <option>{t}</option>
                ))}
              </select>
            </div>
            <div>
              <button className="buttonsCounter color-cyan ">Registrar</button>
            </div>
          </form>
          <ul>
            {carteiraState.expenses.map((expense) => (
              <li key={expense.id}>
                {expense.description}: {expense.amount}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default CarteiraPage;
