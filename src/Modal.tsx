import {
  ReactNode,
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";

interface ModalType {
  openName: string;
  open: (value: string) => void;
  close: () => void;
}
const initialState: ModalType = {
  openName: "",
  open: () => {},
  close: () => {},
};

const ModalContext = createContext(initialState);

export default function Modal({ children }: { children: ReactNode }) {
  const [openName, setOpenName] = useState<string>("");

  const open = (value: string) => setOpenName(value);
  const close = () => setOpenName("");

  return (
    <ModalContext.Provider value={{ open, openName, close }}>
      {children}
    </ModalContext.Provider>
  );
}

interface OpenType {
  children: JSX.Element;
  name: string;
}
function Open({ children, name: windowName }: OpenType) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(windowName) });
}

type BodyType = OpenType;
function Body({ children, name }: BodyType) {
  const { close, openName } = useContext(ModalContext);
  if (openName !== name) return null;

  return (
    <div className="modal">
      <button className="close" onClick={close}>
        x
      </button>
      <div>{cloneElement(children, { onCloseModal: close })}</div>
    </div>
  );
}

Modal.Open = Open;
Modal.Body = Body;
