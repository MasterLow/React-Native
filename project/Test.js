
import React, { Component } from 'react';
import { Text,View,ScrollView  } from 'react-native';
import { Button,Icon  } from 'antd-mobile';
import StepsA from './Component/Steps/Steps_step';
class Test extends Component {
  render() {
    return (
      <ScrollView style={{flex:1}}>
      <View style={{flex:1,display:'flex',alignItems:'center',padding:50}}>

             <StepsA />
      </View>
      </ScrollView >
    );
  }
}
export default Test;