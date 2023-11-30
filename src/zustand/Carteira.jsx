import {create} from "zustand";
import {generateRandomUUID} from "../helpers/generateRandomId";

const useMoneyStore = create((set) => ({
  carteiraState: {
    transactions: 0,
    allMoney: 1000,
    expenses: [],
    positive: true,
    lastValues: {},
    typesCurrencies: [],
  },
  fetchMoneyData: async () => {
    try {
      const response = await fetch(
        "https://economia.awesomeapi.com.br/json/all"
      );
      const data = await response.json();
      let TypesCurrencies = Object.keys(data);
      set((state) => ({
        carteiraState: {
          ...state.carteiraState,
          typesCurrencies: TypesCurrencies,
        },
      }));
      return TypesCurrencies;
    } catch (error) {
      console.error("Error fetching money data:", error);
    }
  },
  addTransaction: async (transactionData) => {
    const response = await fetch("https://economia.awesomeapi.com.br/json/all");
    const data = await response.json();
    const transactionType = transactionData.type.toLowerCase();
    const isExpense = transactionType === "gasto";
    let value = transactionData.value * data[transactionData.currency]?.bid;
    set((state) => {
      const newState = {
        carteiraState: {
          ...state.carteiraState,
          allMoney: isExpense
            ? state.carteiraState.allMoney - value
            : state.carteiraState.allMoney + value,
          transactions: state.carteiraState.transactions + 1,
          expenses: [
            ...state.carteiraState.expenses,
            {
              id: generateRandomUUID(),
              value: transactionData.value,
              description: transactionData.description,
              currency: transactionData.currency,
              transactionType: transactionType,
              cambio: data[transactionData.currency]?.bid,
              convertedToReal:
                transactionData.value * data[transactionData.currency]?.bid,
            },
          ],
        },
      };
      return newState;
    });
  },
}));

export default useMoneyStore;
