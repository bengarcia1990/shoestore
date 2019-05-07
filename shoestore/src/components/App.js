import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../stylesheets/App.css';
import Navbar from './navBar';
import MensShoes from "./mensShoes"
import WomensShoes from "./womensShoes"

class App extends React.Component {

  render() {
    return (
      <div className="App" >
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/mensshoes" component={MensShoes} />
            <Route path="/womensshoes" component={WomensShoes} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  };
};

export default App;
