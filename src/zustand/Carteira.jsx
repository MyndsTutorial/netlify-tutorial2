import {create} from "zustand";

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
  addTransaction: (transactionData) => {
    set((state) => {
      const newState = {
        carteiraState: {
          ...state.carteiraState,
          transactions: state.carteiraState.transactions + 1,
        },
      };

      if (transactionData.amount < 0) {
        newState.carteiraState = {
          ...newState.carteiraState,
          positive: false,
        };

        const expense = {
          id: newState.carteiraState.transactions + 1,
          amount: transactionData.amount,
          description: `Expense for Transaction #${
            newState.carteiraState.transactions + 1
          }`,
        };

        newState.carteiraState.expenses = [
          ...newState.carteiraState.expenses,
          expense,
        ];
      }

      return newState;
    });
  },
}));

export default useMoneyStore;
