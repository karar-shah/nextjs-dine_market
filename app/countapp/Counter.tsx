"use client";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/slice/CartSlice";
import { RootState } from "../store/store";

const CounterView = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector((state: RootState) => state.CartSlice.value);
  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <div className="flex items-center justify-center gap-3 bg-gray-600 p-4 text-white">
      <button onClick={decrement} className="border-2 border-blue-400 p-2">
        -
      </button>
      <div>Counter Value: {counterValue}</div>
      <button onClick={increment} className="border-2 border-blue-400 p-2">
        +
      </button>
    </div>
  );
};
export default CounterView;
