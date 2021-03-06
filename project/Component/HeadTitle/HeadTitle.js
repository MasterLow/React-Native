
import React, { Component } from 'react';
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    NativeModules,
    DeviceEventEmitter,  
} from 'react-native';
import { connect } from 'react-redux';
import { TEXTLICK } from '../Actions';
import { Toast,Icon  } from 'antd-mobile';
 class HeadTitle extends Component {     
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


        //监听事件名为EventName的事件  
        DeviceEventEmitter.addListener('SendEventCallback', (e)=> {    
                           
        Toast.info(JSON.stringify(e), 2, null, false);

        });   
        
    }
    
    componentWillUnmount() {
        //注销 监听事件名为EventName的事件  
        DeviceEventEmitter.removeListener('SendEventCallback', (e)=> {    
                           
            Toast.info(JSON.stringify(e), 2, null, false);
    
            });
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
    PromiseCallback = () => {
        NativeModules.ReactNativeModule.PromiseCallback('213123','参数').then((ret)=>{
            
            Toast.info(ret, 5, null, false);
        },(code,message)=>{
            Toast.info(message, 5, null, false);
        })
    }
    sendEvent = () => {
        NativeModules.ReactNativeModule.SendEventCallback('SendEventCallback','发送的参数').then((ret)=>{
            
           // Toast.info(ret, 5, null, false);
        },(code,message)=>{
            Toast.info(message, 5, null, false);
        })
    }
  render() {
    return (
        <ScrollView style={{flex:1}}>
                <Text style={{padding:20,borderWidth:1,borderColor:'#0f8cf0',borderStyle:'solid',borderRadius:5,margin:20}}>1.如果只有标题,设置headerLeft:null,headerRight:null,{"headerTitleStyle:{flex: 1,textAlign: 'center'},"}</Text>
                <Text style={{padding:20,borderWidth:1,borderColor:'red',borderStyle:'solid',borderRadius:5,margin:20}}>2.如果标题栏左侧还有返回按钮,发现标题偏右依然不居中,则简单的处理方式是:
                                           在右边 再添加一个等宽高的空view:{'\n'}如下:{'\n'}

                                           {"headerRight: (<View style={{height: 44,width: 55,alignItems:'flex-end',justifyContent: 'center',paddingRight:15} }/>)"}
                                           {'\n'}
                                           {"headerTitleStyle:{flex: 1,textAlign: 'center'},"}
                </Text>
                <Text style={{padding:20,borderWidth:1,borderColor:'gray',borderStyle:'solid',borderRadius:5,margin:20}}>3.在static中使用this方法{'\n'}
                                            首先需要在componentDidMount(){}中动态的添加点击事件{'\n'}
                                            属性给params{'\n'}
                                            {'componentDidMount(){this.props.navigation.setParams({'}{'\n'}
                                                    {"title:'自定义Header',"}{'\n'}
                                                    {"navigatePress:this.navigatePress"}{'\n'}
                                                {'})'}{'\n'}
                                            {'}'}{'\n'}
                                            {"navigatePress = () => {"}{'\n'}
                                            {"alert('点击headerRight');"}{'\n'}
                                            {"console.log(this.props.navigation);"}{'\n'}
                                            {" }"}{'\n'}
                                            接下来就可以通过params方法来获取点击事件了{'\n'}
                                            {"static navigationOptions = ({ navigation, screenProps }) => ({"}{'\n'}
                                            {"title: navigation.state.params?navigation.state.params.title:null,"}{'\n'}
                                            {"headerRight:("}{'\n'}
                                            {"<View style={{height: 44,width: 55,alignItems:'flex-end',justifyContent: 'center',paddingRight:15} }><TouchableOpacity onPress={navigation.state.params?navigation.state.params.navigatePress:null}><Icon type='ellipsis' size='sm' color={screenProps.color} /></TouchableOpacity></View>"}{'\n'}
                                                    返回
                                            {"    </Text>"}{'\n'}
                                            {")"}{'\n'}
                                            {"});"}
                 </Text>
                        <TouchableOpacity onPress={this.TextClick}>
                <Text style={{padding:20,borderWidth:1,borderColor:'#0f8cf0',borderStyle:'solid',borderRadius:5,margin:20}}>
                                 {this.props.counter.count}.            redux点击加 1 (https://segmentfault.com/a/1190000008741380)
                </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.PromiseCallback}>
                <Text style={{padding:20,borderWidth:1,borderColor:'red',borderStyle:'solid',borderRadius:5,margin:20}}>
                                 6.交互Callback  (https://segmentfault.com/a/1190000004508328)
                </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.sendEvent}>
                <Text style={{padding:20,borderWidth:1,borderColor:'gray',borderStyle:'solid',borderRadius:5,margin:20}}>
                                 7.交互 rn监听原生，可用于推送  (https://www.jianshu.com/p/b9a7dbe9b336)第三种,注销方法DeviceEventEmitter.removeListener('onScanningResult',this.onScanningResult)，详细 (https://blog.csdn.net/qq_25827845/article/details/52963594)
                </Text>
                        </TouchableOpacity>
      </ScrollView >
    );
  }
}
const mapStateToProps = state => ({
    counter: state.counter
})
export default connect(mapStateToProps)(HeadTitle);