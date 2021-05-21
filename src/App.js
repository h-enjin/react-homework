import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import DashBoard from './DashBoard';
import GridPage from './GridPage';
import UsersPage from './UsersPage';


const App = () => {
  return (
    <BrowserRouter>
      <DashBoard>
        <Switch>
          <Route exact path="/" render={() => <>home</>} />
          <Route exact path="/grid" render={() => <GridPage />} />
          <Route exact path="/users" render={() => <UsersPage />} />
          <Route exact path="/none" render={() => <>none</>} />
        </Switch>
      </DashBoard>
    </BrowserRouter>
  );
}
export default App;