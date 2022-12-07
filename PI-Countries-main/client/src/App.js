import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import CreateActivity from "./components/CreateActivity/CreateActivity";
import EditActivity from "./components/EditActivity/EditActivity";
import DetailCountry from "./components/DetailCountry/DetailCountry";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/">
          <NavBar />
        </Route>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/home/:id">
          <DetailCountry />
        </Route>
        <Route path="/create_activities">
          <CreateActivity />
        </Route>
        <Route path="/edit_activity/:id">
          <EditActivity />
        </Route>
      </Router>
    </div>
  );
}

export default App;
