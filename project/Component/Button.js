
import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Dimensions,
    NativeModules,
} from 'react-native';
import { connect } from 'react-redux';
import { TEXTLICK } from './Actions';
import { Toast,Icon  } from 'antd-mobile';
//获取屏幕宽度  
var width = Dimensions.get('window').width; 
 class Button extends Component {     
    constructor(props){
      super(props)
      this.state = {
          _title:'默认按钮',
          clickReturn:true,

      }
      }	 
    componentDidMount() {
        this.setState({clickReturn:this.props.clickReturn})
    }
    
    componentWillUnmount() {
        
    }
    ButtonClick = () => {
        // this.props.dispatch(TEXTLICK());
        Toast.info('未注入点击方法', 1, null, false);
    }
  render() {
    return (
        <TouchableOpacity onPress={this.props.onPress ? this.props.onPress:this.ButtonClick} style={this.props.button ? this.props.button : this.props.clickReturn ? styles.button_ : styles.button_active}>
           <Text style={this.props.buttontext ? this.props.buttontext : styles.buttontext_}>{this.props.title ? this.props.title : this.state._title}</Text>
        </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
    button_:{
        backgroundColor:'#62B3F4'
    },
    button_active:{
        backgroundColor:'#0f8cf0',
        elevation: 5,
    },
    buttontext_:{
        width:width-60,
        lineHeight:40,
        textAlign:'center',
        color:'#fff',
        fontSize:16,
    },
});
const mapStateToProps = state => ({
    counter: state.counter
})
export default connect(mapStateToProps)(Button);