import "./App.css";
import "./css/courses.css";
import "./css/nav.css";
import NavBar from "./components/NavBar";
import Router from "./hooks/Router";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router></Router>
    </div>
  );
}
export default App;
