/* eslint-disable import/no-unresolved */

import React from "react";
import { Switch } from "react-router-dom";

import MyRoute from "./MyRoute";
import HomePage from "../Views/Home/HomePage";
import UpdateRoute from "../Views/UpdateRoute/UpdateRoute";

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={HomePage} />
      <MyRoute exact path="/rotas/:id/update" component={UpdateRoute} />
    </Switch>
  );
}
