
import React, { Component } from 'react';
import { Text,View,ScrollView,NativeModules  } from 'react-native';
import { data } from './Component/StaticContent/StaticContent';
import StepsA from './Component/Steps/Steps_step';
import { Toast  } from 'antd-mobile';
class Test extends Component {
      
  componentDidMount() {
    NativeModules.ReactNativeModule.MainActivityView('213123','参数',(ret)=>{
    //    Toast.info(ret, 1, null, false);
      });
}
 componentWillUnmount() {
   
}
    //设置顶部导航栏的内容
    static navigationOptions = ({navigation, screenProps}) => ({
      header: null,
  });
  render() {
    return (
      <ScrollView style={{flex:1}}>
      <View style={{flex:1,display:'flex',alignItems:'center',padding:30}}>
             <StepsA data={data} navigate={this.props.navigation.navigate}/>
      </View>
      </ScrollView >
    );
  }
}
export default Test;