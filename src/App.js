import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import homeScreen from "./screens/homeScreen";
import "./App.css";
import LoginScreen from "./screens/loginScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Switch>
            <Route exact path="/" component={homeScreen} />
            <Route exact path="/login" component={LoginScreen} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
