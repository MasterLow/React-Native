
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
 class Classify extends Component {
         //设置顶部导航栏的内容
    static navigationOptions = ({navigation, screenProps}) => ({
        header: null,
    });
  render() {
    return (
        <View style={{}}>
                <Text style={{}}>带参数 跳转至Classify页面</Text>
        </View>
    );
  }
}
export default Classify;