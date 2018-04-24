
import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { Toast  } from 'antd-mobile';




 class HomePage extends Component {    
    //设置顶部导航栏的内容
    static navigationOptions = ({navigation, screenProps}) => ({
        header: null,
    });
  
    JumpClick = (url) => {
       Toast.info(JSON.stringify(this.props.navigation), 10);
     }
  render() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={this.JumpClick}>
                <Text style={{color: 'white'}}>带参数 跳转至Details页面</Text>
            </TouchableOpacity>
        </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        width: 240,
        height: 45,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4398ff',
    }
});
export default HomePage;