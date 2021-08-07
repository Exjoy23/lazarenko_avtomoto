import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Page from '../page/page';
import './app.scss';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Page} />
    </Switch>
  );
}

export default App;
