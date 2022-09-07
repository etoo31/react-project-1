import "./App.css";
import "./css/courses.css";
import "./css/nav.css";
import SubjectInfo from "./components/home/SubjectInfo";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SubjectInfo></SubjectInfo>
    </div>
  );
}
export default App;
