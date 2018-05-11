
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './project/Component/store';
import Test from './project/Test'
import Router from './project/Component/Router/Router'
import {Theme} from './project/Component/StaticContent/StaticContent'
 class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Router screenProps={Theme}/>
      </Provider>
    );
  }
}
export default App;