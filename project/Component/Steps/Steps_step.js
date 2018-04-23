
import React, { Component } from 'react';
import { View,TouchableNativeFeedback } from 'react-native';
import { Steps,Toast,Text  } from 'antd-mobile';
const Step = Steps.Step;

function stepsClick() {
  Toast.info('Toast without mask !!!', 2, null, false);
}
class StepsA extends Component {


   
  render() {
    return (
      <View>
            <Steps current={this.props.data.steps.current} size={this.props.data.steps.size} direction={this.props.data.steps.direction}>
               {this.props.data.steps.step.map((s, i) =><Step key={i} title={s.title} description={s.description}/> )}
           </Steps>
      </View>
    );
  }
}
export default StepsA;