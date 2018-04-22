
import React, { Component } from 'react';
import { View,TouchableNativeFeedback } from 'react-native';
import { Steps,Toast,Text  } from 'antd-mobile';
import { data } from '../StaticContent/StaticContent'
const Step = Steps.Step;

function stepsClick() {
  Toast.info('Toast without mask !!!', 2, null, false);
}
class StepsA extends Component {


   
  render() {
    return (
      <View>
            <Steps current={data.steps.current} size={data.steps.size} direction={data.steps.direction}>
               {data.steps.step.map((s, i) =><Step key={i} title={s.title} description={s.description}/> )}
           </Steps>
      </View>
    );
  }
}
export default StepsA;