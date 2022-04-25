import { Greet } from "./component/Greet";
import "./App.css";
import { Person } from "./component/Person";
import { PersonList } from "./component/PersonList";

function App() {
  const person = {
    firstName: "abc",
    lastName: "xyz",
  };
  const personList = [
    {
      firstName: 'abc', 
      lastName: 'xyz'
    },
    {
      firstName: 'pqr',
      lastName: 'wqe'
    }
  ]
  return (
    <div className="App">
      <Greet name="shailesh" age={23} weight={70} married={false} />
      <Person name={person} />
      <PersonList names={personList} />
    </div>
  );
}

export default App;
