import React, { Component } from 'react';
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    NativeModules,
    Image,
    TextInput,
    Dimensions,

} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { TEXTLICK } from './Component/Actions';
import { Toast,Icon  } from 'antd-mobile';
import { md5,qqzifetch }  from './Component/apis';
import Button from './Component/Button';

 
//获取屏幕宽度  
var width = Dimensions.get('window').width;  
 class Login extends Component {     
    constructor(props){
      super(props)
      this.state = {
        imgurl:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2635305891,1187858716&fm=27&gp=0.jpg',
        clickReturn:true,
        username:'',
        password:'',

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
                backgroundColor:null,
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
    Login(){
        if(this.state.clickReturn){
            
        }else{
            
        var object = {
            name:'xmg',
            age:18
        };

        // JSON.stringify(object): JSON对象转换为字符串 用来存储
        // AsyncStorage.setItem('object',JSON.stringify(object),(error)=>{
        //     if (error) {
        //         alert('存储失败');
        //     } else  {
        //        // alert('存储成功');
        //     }
        // });

        // AsyncStorage.getItem('object',(error,result)=>{
        //     if (!error) {
        //         alert(result);
        //     }
        // })
        // AsyncStorage.removeItem('object',(error)=>{
        //     if (error) {
        //         alert('删除失败');
        //     } else  {
        //         alert('删除成功');
        //     }
        // });

        //     return;
            var data={
                username1: this.state.username,
                Password1: md5(this.state.password),
                useToken: 1,
                PushId: '',   // 推送终端参数
                location:'',
                cityId:''
             }
             var options = {
                 type:'POST',
                 url:'/Member/LoginPost',
                 data:data,
             }
             qqzifetch(options)
             .then( res=>{
                alert(JSON.stringify(res));
                 //请求成功
                 //if(res.header.statusCode == 'success'){
                     //这里设定服务器返回的header中statusCode为success时数据返回成功
                     //if(res.Result){
                        //  this.setState({
                        //      data: res.Result
                        //    });
                     //}
                 //}else{
                     //服务器返回异常，设定服务器返回的异常信息保存在 header.msgArray[0].desc
                 //    console.log(res.header.msgArray[0].desc);
                     
                 //}
             }).catch( err=>{ 
                alert('err'+err);
                 
             });
        };
    }
    onChangeName = (value) => {
        this.setState({
            username:value
          }, () => {
            this.ifClick();
          });
    }
    onChangePass = (value) => {
        this.setState({
            password:value
          }, () => {
            this.ifClick();
          });
    }
    ifClick(){
        if(this.state.username!==''&&this.state.password!==''){this.setState({clickReturn:false});}else{this.setState({clickReturn:true});}
    }
  render() {
    return (
        <LinearGradient start={{x: 0, y: 1 }} end={{x: 1, y: 1 }} colors={['#B06AB3', '#4568DC']} style={{flex:1,marginTop:-56,}}>
        <View style={styles.bgc}>
            <View style={styles.title}></View>
        </View >
        <View style={styles.content}>
            <View style={styles.headerimg}>
                <Image 
                // source={require('./img/icon.jpg')}
                source={!this.state.imgurl ? require('./images/headImg.jpg') : {uri:this.state.imgurl}}
                style={styles.img}
                ></Image>  
            </View>
            <View style={styles.userName}>
                <Text style={styles.Name}>账号：</Text>
                <TextInput style={styles.Nameinput}
                underlineColorAndroid='transparent'//去下划线
                placeholder="输入用户名"
                placeholderTextColor={'#BFBFBF'}
                maxLength={16}
                clearButtonMode = {'always'}
                onChangeText={this.onChangeName}
                />
            </View>
            <View style={styles.userPass}>
                <Text style={styles.Name}>密码：</Text>
                <TextInput style={styles.Nameinput}
                multiline = {false}
                secureTextEntry = {true}
                underlineColorAndroid='transparent'//去下划线
                placeholder="输入密码"
                placeholderTextColor={'#BFBFBF'}
                maxLength={16}
                clearButtonMode = {'always'}
                onChangeText={this.onChangePass}
                />
            </View>
            <View style={{marginTop:30}}>
             <Button 
                    title="登 入"
                    clickReturn={this.state.clickReturn}
                    // button={styles.button}
                    // buttontext={styles.buttontext}
                    onPress={this.Login.bind(this)}
                    
             />
             </View>
             <View>
                 <Text style={styles.foget}>忘记密码？</Text>
             </View>
        </View>
        </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
    bgc: {
        flex:1,
    },
    title:{
        width:'100%',
        height:56,
        borderBottomWidth:1,
        borderColor:'#fff',
        borderStyle:'solid',
    },
    content:{
        width:'100%',
        height:'100%',
        alignItems:'center',
    },
    headerimg:{
        marginTop:56+50,
        width:106,
        height:106,
        borderWidth:3,
        borderColor:'#0f8cf0',
        borderStyle:'solid',
        backgroundColor:'#98AAB4',
        borderRadius:106,
    },
    img:{
        width:100,
        height:100,
        borderRadius:100,
        resizeMode:'cover'
    },
    userName:{
        marginTop:20,
        display:'flex',
        flexDirection:'row',
        borderBottomWidth:1,
        borderColor:'#fff',
        borderStyle:'solid',
        //elevation: 10,
    },
    Name:{
        width:width-260,
        lineHeight:50,
        textAlign:'center',
        fontSize:16,
        color:'#fff',
    },
    Nameinput:{
        width:width-160,
        height:50,
        textAlign:'left',
        color:'#fff',
        fontSize:16,
    },
    userPass:{
        display:'flex',
        flexDirection:'row',
        borderBottomWidth:1,
        borderColor:'#fff',
        borderStyle:'solid',
        //elevation: 10,
    },
    buttontext:{
        width:width-60,
        lineHeight:40,
        textAlign:'center',
        color:'#fff',
        fontSize:16,
    },
    foget:{
        width:width-60,
        lineHeight:40,
        textAlign:'center',
        color:'#fff',
        fontSize:12,
    },
});
const mapStateToProps = state => ({
    counter: state.counter
})
export default connect(mapStateToProps)(Login);