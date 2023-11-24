import Counter from "./Counter";
import FormGroup from "./FormGroup";

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
    </div>
  );
}
