import FirstComponentByClass from "./components/class/FirstComponentByClass";
import SecondComponentByClass from "./components/class/SecondComponentByClass";
import FirstComponentByFunc from "./components/func/FirstComponentByFunc";
import SecondComponentByFunc from "./components/func/SecondComponentByFunc";

function App() {
  return (
    <div className="App">
      <FirstComponentByFunc />
      <FirstComponentByClass />
      <hr />
      <SecondComponentByFunc
        type="func"
        name="SecondComponentByFunc"
        every="test1"
      />
      <SecondComponentByClass
        type="class"
        name="SecondComponentByClass"
        thing="test2"
      />
    </div>
  );
}

export default App;
