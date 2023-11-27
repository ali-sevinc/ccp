import Counter from "./Counter";
import FormGroup from "./FormGroup";
import Modal from "./Modal";
import ModalShow from "./ModalShow";
import ModalShow2 from "./ModalShow2";

export default function App() {
  return (
    <div className="app">
      <h1>Compound Component Pattern</h1>

      <Counter>
        <p className="label">
          <Counter.Label>The flexible counter</Counter.Label>
        </p>
        <div className="action">
          <Counter.Decrease icon="-" />
          <Counter.Count />
          <Counter.Increase icon="+" />
        </div>
      </Counter>
      <p>-----------------------------------</p>
      <Counter>
        <Counter.Count />
        <div>
          <Counter.Decrease icon="⏩" />
          <Counter.Increase icon="⏪" />
        </div>
        <Counter.Label>The flexible counter</Counter.Label>
      </Counter>

      <form>
        <FormGroup>
          <p>
            <FormGroup.Label>Name</FormGroup.Label>
            <FormGroup.Input />
          </p>
        </FormGroup>
        <FormGroup>
          <p>
            <FormGroup.Label>Email</FormGroup.Label>
            <FormGroup.Input />
          </p>
        </FormGroup>
        <FormGroup>
          <p>
            <FormGroup.Label>Password</FormGroup.Label>
            <FormGroup.Input />
          </p>
        </FormGroup>
      </form>

      <Modal>
        <Modal.Open name="a-window">
          <button>Modal window-1</button>
        </Modal.Open>

        <Modal.Body name="a-window">
          <ModalShow />
        </Modal.Body>

        <Modal.Open name="another-window">
          <button>Modal window-2</button>
        </Modal.Open>

        <Modal.Body name="another-window">
          <ModalShow2 />
        </Modal.Body>
      </Modal>
    </div>
  );
}
