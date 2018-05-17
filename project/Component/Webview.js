
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
const html = '<!DOCTYPE html><head><meta  charset=UTF-8"></head><html><body><h1>这是一个html!</body></html>';  
 class Webview extends Component {     
    constructor(props){
      super(props)
      this.state = {
        webViewData: 0
      }
      this.data = 0;
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
    renderError(e){
        Toast.info('renderError', 2, null, false);
    }
    _onNavigationStateChange = (navState) => {
        // Toast.info(JSON.stringify(navState), 10, null, false);
        this.setState({
            backButtonEnabled: navState.canGoBack,
            forwardButtonEnabled: navState.canGoForward,
            url: navState.url,
            status: navState.title,
            loading: navState.loading,
        });
    }
    sendMessage = (e) => {
        this.refs.webview.postMessage(++this.data);
    }
    handleMessage(e) {
        this.setState({webViewData: e.nativeEvent.data});
    }

  render() {
    return (     
        <View style={{flex:1,}}>
                <WebView 
                    style={{flex:1,}} 
                    ref={'webview'}
                    // source={require('../html/react-html.html')}
                    // source={{html: html, baseUrl: ''}}  // baseUrl: ''中文乱码解决  
                    //注意：uri
                    source={{uri: 'http://www.baidu.com'}}
                    onLoad={this.onLoad}
                    onLoadEnd={this.onLoadEnd}
                    onLoadStart={this.onLoadStart}
                    renderError={(e) => {
                        this.renderError(e)
                    }}  //目前无反应
                    startInLoadingState={true}
                    renderLoading={() => {
                        return  <ProgressBarAndroid  
                            styleAttr='LargeInverse'  
                            style={{marginTop:180}}
                            />  
                    }}
                    onNavigationStateChange={this._onNavigationStateChange}
                    onMessage={(e) => {         //只适合这样的写法
                        this.handleMessage(e)
                    }}

                >
                    
                </WebView>
                <View style={{flex:1,borderWidth:1,borderColor:'#0f8cf0',borderStyle:'solid',borderRadius:5,margin:20,display:'flex',alignItems:'center'}}>
                        <Text style={{padding:20}}>这是react-native页面</Text>
                        <Text style={{padding:20}}>来自webview的数据 : </Text><Text style={{color:'blue'}}>{this.state.webViewData}</Text>
                        <TouchableOpacity onPress={this.sendMessage}>
                                <Text style={{width:200,lineHeight:50,textAlign:'center',color:'white',backgroundColor:'#0f8cf0'}}>发送数据到WebView</Text>
                        </TouchableOpacity>
                </View>
        </View>
    );
  }
}
const mapStateToProps = state => ({
    counter: state.counter
})
export default connect(mapStateToProps)(Webview);