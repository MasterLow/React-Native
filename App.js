
import React, { Component } from 'react';
import Test from './project/Test'
import Router from './project/Component/Router/Router'
import {Theme} from './project/Component/StaticContent/StaticContent'
 class App extends Component {
  render() {
    return (
      <Router screenProps={Theme}/>
    );
  }
}
export default App;