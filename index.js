import { AppRegistry } from 'react-native';
import App from './App';
import { YellowBox  } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);//隐藏了这个警告

AppRegistry.registerComponent('My_React_Native', () => App);
