
import React, { Component } from 'react';
import {
    Image,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { Toast  } from 'antd-mobile';
 class Index extends Component {
    constructor(props){
      super(props)
      this.state = {
        toLocaleString:'别人笑你太疯癫',

      }
      }		 
      
      componentDidMount() {
        Toast.info(JSON.stringify(this.props.navigation.state.params), 10, null, false);
        
        this.timer = setInterval(()=>{

            this.refreshTime();

          },1000,);
    }
     componentWillUnmount() {
        clearInterval(this.timer);
    }
    refreshTime = (e) => {
        
        this.setState({
            toLocaleString:new Date().toLocaleString()
        })
        
      }
         //设置顶部导航栏的内容
    static navigationOptions = ({navigation, screenProps}) => ({
        header: null,
    });
  render() {
    return (
        <View style={{flex:1,backgroundColor:'#8067E7',}}>
            <View style={{width:'100%',height:150,display:'flex',alignItems:'center',justifyContent:'center'}}>
             <Image
                 resizeMode='cover'
                 source={require('../../images/huangguan.png')}
                    style={{width:80,height:80}}/>
            </View>
            <View style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:'#fff',fontSize:18}}>{this.state.toLocaleString}</Text>
            </View>
        </View>
    );
  }
}
export default Index;