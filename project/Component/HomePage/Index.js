
import React, { Component } from 'react';
import {
    Image,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
 class Index extends Component {
         //设置顶部导航栏的内容
    static navigationOptions = ({navigation, screenProps}) => ({
        header: null,
    });
  render() {
    return (
        <View style={{flex:1,backgroundColor:'#8067E7',}}>
            <View style={{width:'100%',height:150,display:'flex',alignItems:'center',justifyContent:'center'}}>
             <Image
                 resizeMode='cover'
                 source={require('../../images/huangguan.png')}
                    style={{width:80,height:80}}/>
            </View>
            <View style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:'#fff'}}>时间：</Text>
            </View>
        </View>
    );
  }
}
export default Index;