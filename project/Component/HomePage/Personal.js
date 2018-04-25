
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
 class Personal extends Component {
         //设置顶部导航栏的内容
    static navigationOptions = ({navigation, screenProps}) => ({
      header: null,
  });
  render() {
    return (
        <View style={{flex:1,backgroundColor:'#8695A8',}}>
                <Text style={{color:'#fff'}}>带参数 跳转至Personal页面</Text>
        </View>
    );
  }
}
export default Personal;