import react from "react";
import {BrowserRouter , Switch , Route , Redirect} from "react-router-dom";
import GettingStarted from "./component/getting-started";
import Header from "./component/header";
import LandingPage from "./component/landingPage";
import './static/scss/app.scss';

function App() {
  return (
    <>
   
    <BrowserRouter>
    <Header></Header>
    <Switch>
      <Route path="/getting-started" component={GettingStarted}></Route>
      <Route path="/" component={LandingPage}></Route>
    </Switch>
    </BrowserRouter>
    </>
  );
}
export default App;