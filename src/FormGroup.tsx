import {
  ChangeEvent,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";

interface InitialType {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const initialState: InitialType = {
  value: "",
  onChange: () => {},
};

const InputContext = createContext(initialState);

export default function FormGroup({ children }: { children: ReactNode }) {
  const [value, setValue] = useState("");

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return (
    <InputContext.Provider value={{ value, onChange }}>
      {children}
    </InputContext.Provider>
  );
}

function Label({ children }: { children: ReactNode }) {
  return <label>{children}</label>;
}
function Input() {
  const { onChange, value } = useContext(InputContext);
  return <input onChange={onChange} value={value} />;
}

FormGroup.Label = Label;
FormGroup.Input = Input;
