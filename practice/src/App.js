import "./App.css";
import Counter from "./components/counter";
import Counterclass from "./components/counterclass";
import EventBind from "./components/Eventbind";
import Parent from "./components/Parent";
import Component from "./components/useeffect";
import UseReducer from "./components/UseReducer";
function App() {
  return (
    <div className="App">
      <Counter />
      <Counterclass/>
      <Component/>
      <EventBind/>
      <Parent/>
      <UseReducer/>
    </div>
  );
}

export default App;
