import store from "../store/index";

const useCounter = () => {
  const setValue = () => {
    return store.state.counter;
  };

  const increment = () => {
    store.commit("increment");
  };

  const decrement = () => {
    store.commit("decrement");
  };

  const reset = () => {
    store.commit("reset");
  };

  return { increment, decrement, reset, setValue };
};

export default useCounter;
