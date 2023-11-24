import { ReactNode, createContext, useContext, useState } from "react";

interface InitialType {
  count: number;
  increase: () => void;
  decrease: () => void;
}

const initialState: InitialType = {
  count: 0,
  increase: () => {},
  decrease: () => {},
};

//context
const CounterContext = createContext(initialState);

//parent
export default function Counter({ children }: { children: ReactNode }) {
  const [count, setCount] = useState<number>(0);
  function increase() {
    setCount((prev) => prev + 1);
  }
  function decrease() {
    setCount((prev) => prev - 1);
  }

  return (
    <CounterContext.Provider value={{ count, increase, decrease }}>
      {children}
    </CounterContext.Provider>
  );
}

//child components
function Count() {
  const { count } = useContext(CounterContext);
  return <span>{count}</span>;
}
function Label({ children }: { children: ReactNode }) {
  return <span>{children}</span>;
}
function Increase({ icon }: { icon: string }) {
  const { increase } = useContext(CounterContext);
  return <button onClick={increase}>{icon}</button>;
}
function Decrease({ icon }: { icon: string }) {
  const { decrease } = useContext(CounterContext);
  return <button onClick={decrease}>{icon}</button>;
}

//add child components as properties to parent component
Counter.Count = Count;
Counter.Label = Label;
Counter.Increase = Increase;
Counter.Decrease = Decrease;
