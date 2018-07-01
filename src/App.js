import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import PizzaConfigurator from './components/PizzaConfigurator'

class App extends Component {
  render() {
    return (<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">Make your own Pizza!</h1>
      </header>
      <PizzaConfigurator/>
    </div>);
  }
}

export default App;
