import Main from "./components/main/Main";
import Sidenav from "./components/side/Sidenav";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Sidenav />
      <Main />
    </div>
  );
};

export default App;
