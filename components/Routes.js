import React from "react";
import { Route, Switch } from "react-router-dom";
import { Rentals, About, Contact, Show } from "./components";

const Routes = props => {
  return (
    <Switch>
      <Route exact path="/" component={Rentals} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/rentals/:rental_id" component={Show} />
    </Switch>
  );
};

export default Routes;
