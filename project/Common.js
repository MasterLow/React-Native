
import React, { Component } from 'react';
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { TEXTLICK } from './Component/Actions';
import { Toast,Icon  } from 'antd-mobile';
 class Common extends Component {     
    constructor(props){
      super(props)
      this.state = {
          

      }
      }	 
         //设置顶部导航栏的内容
    static navigationOptions = ({navigation, screenProps}) => ({
            headerTitle:'title居中',
            //headerBackTitle:null,//返回箭头后面的文字
            headerTintColor:screenProps.color,   
            // headerLeft:(<View style={{height: 44,width: 55,alignItems:'flex-start',justifyContent: 'center',paddingLeft:15} }><TouchableOpacity onPress={navigation.state.params?navigation.state.params.LeftPress:null}><Icon type="ellipsis" color={screenProps.color} /></TouchableOpacity></View>),
            headerRight:(<View style={{height: 44,width: 55,alignItems:'flex-end',justifyContent: 'center',paddingRight:15} }><TouchableOpacity onPress={navigation.state.params?navigation.state.params.RightPress:null}><Icon type="ellipsis" color={screenProps.color} /></TouchableOpacity></View>),     
            //headerLeft:null,     
            headerTitleStyle:{
                flex: 1,
                textAlign: 'center',
            },
            headerStyle:{
                backgroundColor:screenProps.backgroundColor,
            },
    });
    componentDidMount() {
        
        this.props.navigation.setParams({
            // LeftPress:this.LeftPress,
            RightPress:this.RightPress
        })
    }
    
    componentWillUnmount() {
        
    }
    // LeftPress = () => {
    //     Toast.info('左上角', 2, null, false);
    //     this.props.navigation.goBack();
    // }
    RightPress = () => {
        Toast.info('右上角', 2, null, false);
        console.log(this.props.navigation);
    }
    TextClick = () => {
        this.props.dispatch(TEXTLICK());
      }
  render() {
    return (
      <ScrollView style={{flex:1}}>
        
      </ScrollView >
    );
  }
}
const mapStateToProps = state => ({
    counter: state.counter
})
export default connect(mapStateToProps)(Common);