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
  const [currency, setCurrency] = useState([]);
  const [formData, setFormData] = useState({
    value: "",
    description: "",
    type: "Gasto",
    currency: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const allTypes = await fetchMoneyData();
        setFormData({...formData, currency: allTypes[0]});
        setCurrency(allTypes);
      } catch (error) {
        console.error("Error fetching money data:", error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTransaction(formData);
    setFormData({
      ...formData,
      value: "",
      description: "",
    });
  };

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
        <div className="">
          <h1>Minha Carteira: {carteiraState.allMoney}R$</h1>
          <div className="header-wallet">
            <form onSubmit={handleSubmit}>
              <div className="top-form">
                <input
                  type="number"
                  name="value"
                  placeholder="Valor..."
                  value={formData.value}
                  className="input-wallet"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="description"
                  placeholder="Descrição..."
                  value={formData.description}
                  className="input-wallet"
                  onChange={handleInputChange}
                />
                <br></br>
                <select
                  name="type"
                  className="select-wallet"
                  value={formData.type}
                  onChange={handleInputChange}
                >
                  <option value="Gasto">Gasto</option>
                  <option value="Entrada">Entrada</option>
                </select>
                <select
                  className="select-wallet"
                  name="currency"
                  value={formData.currency}
                  onChange={handleInputChange}
                >
                  {currency.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <button type="submit" className="buttonsCounter color-cyan">
                  Registrar
                </button>
              </div>
            </form>
            <div className="custom-table">
              <div className="linha-table header">
                <div>Description</div>
                <div>Cambio do dia</div>
                <div>Value</div>
                <div>Currency</div>
                <div>Converted to Real</div>
              </div>
              {carteiraState.expenses.map((expense) => (
                <div
                  className="linha-table"
                  key={expense.id}
                  style={
                    expense.transactionType === "gasto"
                      ? {backgroundColor: "red"}
                      : {backgroundColor: "green"}
                  }
                >
                  <div>{expense.description}</div>
                  <div>{expense.cambio}</div>
                  <div>{expense.value}</div>
                  <div>{expense.currency}</div>
                  <div>{parseFloat(expense.convertedToReal.toFixed(2))}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarteiraPage;
