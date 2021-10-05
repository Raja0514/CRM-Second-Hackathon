import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import Registration from "./Registration";
import login from "./Login";
import Forgetpwd from "./Forgetpwd";
import Notfound from "./Notfound";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h2>CRM Application Form</h2>
        <Link to="/">login</Link><br></br>
        <Link to="/Forgetpwd">ForgetPassword</Link><br></br>
        <Link to="/Registration">Registration</Link>
        <br></br>
      </div>
      <Switch>
        <Route path="/" exact component={login} />
        <Route path="/Forgetpwd" component={Forgetpwd} />
        <Route path="/Registration" component={Registration} />
        <Route path="/Login">
          <Redirect to="/" />
        </Route>
        <Route path="*" component={Notfound} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
