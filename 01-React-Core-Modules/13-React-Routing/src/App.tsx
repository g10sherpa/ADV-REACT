import React from "react";
import "./App.css";
import NavBar from "./modules/layout/components/navbar/NavBar";
import Home from "./modules/layout/components/home/Home";
import EmployeeList from "./modules/employees/components/EmployeeList";
import StockList from "./modules/stocks/components/StockList";
import About from "./modules/layout/components/about/About";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import EmployeeDetails from "./modules/employees/components/EmployeeDetails";
class App extends React.Component {
  render(): React.ReactNode {
    return (
      <React.Fragment>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/about"} component={About} />
            <Route exact path={"/employees"} component={EmployeeList} />
            <Route
              exact
              path={"/employees/:employeeId"}
              component={EmployeeDetails}
            />
            <Route exact path={"/stocks"} component={StockList} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
