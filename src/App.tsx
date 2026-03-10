import { Route, Switch } from 'wouter'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import DashboardLayout from "@/components/DashboardLayout";

function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/">
        <DashboardLayout>
          <Home />
        </DashboardLayout>
      </Route>
    </Switch>
  )
}

export default App