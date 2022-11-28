import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
// import CreateRecipes from "./components/CreateRecipes/CreateRecipes";
// import DetailRecipe from "./components/DetailRecipe/DetailRecipe";
// import Register from "./components/Register/Register";
// import LogIn from "./components/LogIn/LogIn";

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
        {/* <Route path="/home/:id">
          <DetailRecipe />
        </Route>
        <Route path="/create_recipes">
          <CreateRecipes />
        </Route> */}
      </Router>
    </div>
  );
}

export default App;
