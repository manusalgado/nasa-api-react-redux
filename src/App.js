import React, { Component } from 'react';
import VisibleAstronomy from '../src/containers/VisibleAstronomy'
import Header from './components/Header'
import 'materialize-css/dist/css/materialize.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <VisibleAstronomy />
      </div>
    );
  }
}

export default App;
