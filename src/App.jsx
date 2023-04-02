import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Todo from "./components/Button/botones"


function App() {
  let cartvalor = 0;

  return (
    <div className="App">
      <NavBar valor={cartvalor}/>
      <Todo valor={cartvalor}/>
      
    </div>
  );
}

export default App;
