import React, { Component } from 'react';
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    NativeModules,

} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { TEXTLICK } from './Component/Actions';
import { Toast,Icon  } from 'antd-mobile';
 class Login extends Component {     
    constructor(props){
      super(props)
      this.state = {
          

      }
      }	 
         //设置顶部导航栏的内容
    static navigationOptions = ({navigation, screenProps}) => ({
            headerTitle:'Login',
            //headerBackTitle:null,//返回箭头后面的文字
            headerTintColor:screenProps.color,   
            // headerLeft:(<View style={{height: 44,width: 55,alignItems:'flex-start',justifyContent: 'center',paddingLeft:15} }><TouchableOpacity onPress={navigation.state.params?navigation.state.params.LeftPress:null}><Icon type="ellipsis" color={screenProps.color} /></TouchableOpacity></View>),
            headerRight:(<View style={{height: 44,width: 55,alignItems:'flex-end',justifyContent: 'center',paddingRight:15} }><TouchableOpacity onPress={navigation.state.params?navigation.state.params.RightPress:null}><Icon type="&#xe67d;" color={screenProps.color} /></TouchableOpacity></View>),     
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
        <LinearGradient colors={['#63B8FF', '#1C86EE', '#0000EE']} style={{width:200,height:200}}>
        <View style={styles.bgc}>

        </View >
        </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
    bgc: {
        flex:1,
    },
});
const mapStateToProps = state => ({
    counter: state.counter
})
export default connect(mapStateToProps)(Login);