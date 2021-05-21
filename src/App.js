import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import DashBoard from './DashBoard';


const App = () => {
  return (
    <BrowserRouter>
      <DashBoard>
        <Switch>
          <Route exact path="/" render={() => <>home</>} />
          <Route exact path="/grid" render={() => <>grid</>} />
          <Route exact path="/users" render={() => <>users</>} />
          <Route exact path="/none" render={() => <>none</>} />
        </Switch>
      </DashBoard>
    </BrowserRouter>
  );
}
export default App;