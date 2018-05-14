
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
import { FetchRequest } from './Component/ApiRequest';
import { Toast,Icon  } from 'antd-mobile';
 class Network extends Component {     
    constructor(props){
      super(props)
      this.state = {
          data:'',

      }
      }	 
         //设置顶部导航栏的内容
    static navigationOptions = ({navigation, screenProps}) => ({
            headerTitle:'网络请求',
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
        });

        FetchRequest('Circle/ReasonList','GET')
    .then( res=>{
        //请求成功
        //if(res.header.statusCode == 'success'){
            //这里设定服务器返回的header中statusCode为success时数据返回成功
            if(res.Result){
                this.setState({
                    data: res.Result
                  });
            }
        //}else{
            //服务器返回异常，设定服务器返回的异常信息保存在 header.msgArray[0].desc
        //    console.log(res.header.msgArray[0].desc);
            
        //}
    }).catch( err=>{ 
        //请求失败
    this.setState({
        data: err
      });
        
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
      <ScrollView style={{flex:1,}}>
            <Text>{JSON.stringify(this.state.data)}</Text>
      </ScrollView >
    );
  }
}
const mapStateToProps = state => ({
    counter: state.counter
})
export default connect(mapStateToProps)(Network);