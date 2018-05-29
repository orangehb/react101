import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Onboarding from './components/Onboarding';

class App extends Component {
  onClick = () => {
  window.alert('Do not click me!');
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Onboarding
           title='Step 01'
           content='Welcome'
           footer={<Button onClick={this.onClick}>Got it</Button>}>
        </Onboarding>
        <Button>Cherry</Button>
      </div>
    );
  }
}

export default App;
