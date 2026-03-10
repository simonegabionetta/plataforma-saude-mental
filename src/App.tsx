import { Route, Switch } from "wouter";
import Login from "@/pages/Login";
import Home from "@/pages/Home";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
    </Switch>
  );
}

export default App;
