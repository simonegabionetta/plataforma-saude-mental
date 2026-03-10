import { Route, Switch } from "wouter";
import Home from "@/pages/Home";
import Sobre from "@/pages/Sobre";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/sobre" component={Sobre} />
    </Switch>
  );
}

export default App;
