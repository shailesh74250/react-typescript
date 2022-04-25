import { Greet } from "./component/Greet";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Greet name="shailesh" age={23} weight={70} married={false} />
    </div>
  );
}

export default App;
