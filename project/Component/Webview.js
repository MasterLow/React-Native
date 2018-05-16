
import React, { Component } from 'react';
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    WebView,
    NativeModules,
    ProgressBarAndroid,
} from 'react-native';
import { connect } from 'react-redux';
import { TEXTLICK } from './Actions';
import { Toast,Icon  } from 'antd-mobile';
const html = '<!DOCTYPE html><html><body><h1>This is a heading!</body></html>';  
 class Webview extends Component {     
    constructor(props){
      super(props)
      this.state = {
          

      }
      }	 
         //设置顶部导航栏的内容
    static navigationOptions = ({navigation, screenProps}) => ({
            headerTitle:'webview',
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
    onLoad = () => {
        // Toast.info('onLoad', 2, null, false);
    }
    onLoadEnd = () => {
        //Toast.info('onLoadEnd', 2, null, false);
    }
    onLoadStart = () => {
        //Toast.info('onLoadStart', 2, null, false);
    }
    renderError = () => {
        Toast.info('renderError', 2, null, false);
    }
  render() {
    return (     
        <View style={{flex:1,}}>
                <WebView 
                    style={{flex:1}} 
                    source={{uri: 'http://www.qqzi.com'}}
                    onLoad={this.onLoad}
                    onLoadEnd={this.onLoadEnd}
                    onLoadStart={this.onLoadStart}
                    renderError={this.renderError}  //目前无反应
                    startInLoadingState={true}
                    renderLoading={() => {
                        return  <ProgressBarAndroid  
                            styleAttr='LargeInverse'  
                            style={{marginTop:180}}
                            />  
                    }}
                >
                    {/* source={require('./helloworld.html')} */}
                    {/* {source={{html: html}}  } */}
                    {/* 注意：uri */}
                    
                </WebView>
        </View>
    );
  }
}
const mapStateToProps = state => ({
    counter: state.counter
})
export default connect(mapStateToProps)(Webview);