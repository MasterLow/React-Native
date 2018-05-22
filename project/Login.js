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

} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { TEXTLICK,ISLOGINLICK } from './Component/Actions';
import { Toast,Icon  } from 'antd-mobile';
import { BasicWH,md5,qqzifetch }  from './Component/apis';
import Storage from './Component/Storage';
import Button from './Component/Button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

 class Login extends Component {     
    constructor(props){
      super(props)
      this.state = {
        HeadPicture:'',
        clickReturn:true,
        username:'',
        password:'',
        code:'',
        loginCode:'',

      }
      }	 
         //设置顶部导航栏的内容
    static navigationOptions = ({navigation, screenProps}) => ({
            header:null,
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
    async componentDidMount() {
        
        // this.props.navigation.setParams({
        //     // LeftPress:this.LeftPress,
        //     RightPress:this.RightPress
        // })
     
        let user =await Storage.get('username1'); 
        alert(JSON.stringify(user));
        if(user) this.setState({ username:user.username1,HeadPicture:user.HeadPicture }, () => { });
        
    }
    
    componentWillUnmount() {
        
    }
    // LeftPress = () => {
    //     Toast.info('左上角', 2, null, false);
    //     this.props.navigation.goBack();
    // }
    // RightPress = () => {
    //     Toast.info('右上角', 2, null, false);
    //     console.log(this.props.navigation);
    // }
    rightClick = () => {
        this.props.navigation.goBack();//返回
    }
    Login(){
        if(this.state.clickReturn){
            
        }else{
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
             .then ( res=>{
                if(res.Result){   
                    Storage.save('username1',{username1: this.state.username,HeadPicture:res.Result.HeadPicture});
                    this.props.dispatch(ISLOGINLICK(res.Result));
                }else{
                    if(res.Tip){
                        this.setState({ loginCode:true })
                         }
                }
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
    onChangeCode = (value) => {
        this.setState({
            code:value
          }, () => {
            this.ifClick();
          });
    }
    ifClick(){
        if(this.state.username!==''&&this.state.password!==''){this.setState({clickReturn:false});}else{this.setState({clickReturn:true});}
    }
  render() {
    return (
        <KeyboardAwareScrollView>
        <LinearGradient start={{x: 0, y: 1 }} end={{x: 1, y: 1 }} colors={['#B06AB3', '#4568DC']} style={{width:BasicWH.Width,height:BasicWH.NoBarHeight}}>
        <View style={styles.bgc}>
            <TouchableOpacity onPress={() =>{this.props.navigation.goBack()} }><View style={styles.title}><Icon type="&#xe632;" color={'#fff'} size='lg'/></View></TouchableOpacity>
            <TouchableOpacity onPress={this.TextClick}><View style={styles.title}><Text  style={styles.titletext} >LOGIN</Text></View></TouchableOpacity>
            <TouchableOpacity onPress={this.rightClick}><View style={styles.title}><Icon type="&#xe67d;" color={'#fff'} size='md'/></View></TouchableOpacity>
        </View>
        <View style={styles.content}>
            <View style={styles.headerimg}>
                <Image 
                // source={require('./img/icon.jpg')}
                source={!this.state.HeadPicture ? require('./images/headImg.jpg') : {uri:this.state.HeadPicture}}
                style={styles.img}
                ></Image>  
            </View>
            <View style={styles.margin}>
            <View style={styles.user}>
                <Text style={styles.Name}>账    号：</Text>
                <TextInput style={styles.Nameinput}
                underlineColorAndroid='transparent'//去下划线
                placeholder="输入用户名"
                placeholderTextColor={'#BFBFBF'}
                maxLength={16}
                clearButtonMode = {'always'}
                onChangeText={this.onChangeName}
                value={ this.state.username }
                />
            </View>
            <View style={styles.user}>
                <Text style={styles.Name}>密    码：</Text>
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
            <View style={styles.user}>
                <Text style={styles.Name}>验证码：</Text>
                <TextInput style={styles.codeinput}
                multiline = {false}
                secureTextEntry = {true}
                underlineColorAndroid='transparent'//去下划线
                placeholder="请输入验证码"
                placeholderTextColor={'#BFBFBF'}
                maxLength={6}
                clearButtonMode = {'always'}
                onChangeText={this.onChangeCode}
                />
                <View style={styles.viewimg}>
                <Image 
                // source={require('./img/icon.jpg')}
                source={!this.state.HeadPicture ? require('./images/headImg.jpg') : {uri:this.state.HeadPicture}}
                style={styles.codeimg}
                ></Image> 
                </View>
            </View>
            </View>
            <View style={{marginTop:30}}>
             <Button 
                    title={ this.props.counter.islogin ? "已登入":"登 入"}
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
        </KeyboardAwareScrollView>
    );
  }
}
const styles = StyleSheet.create({
    bgc: {
        display:'flex',
        flexDirection:'row',
        width:'100%',
        borderBottomWidth:1,
        borderColor:'#fff',
        borderStyle:'solid',
        alignItems:'center',
        justifyContent:'space-between',
        height:56,
        padding:10,
    },
    title:{
        alignItems:'center',
        justifyContent:'center',
    },
    titletext:{
        fontSize:18,
        color:'#fff',

    },
    content:{
        width:BasicWH.Width,
        height:BasicWH.NoBarHeight-56,
        alignItems:'center',
    },
    headerimg:{
        marginTop:30,
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
        resizeMode:'cover',
    },
    viewimg:{
        width:BasicWH.Width-260,
        height:50,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    codeimg:{
        width:BasicWH.Width-280,
        height:40,
    },
    margin:{
        marginTop:30,
    },
    user:{
        display:'flex',
        flexDirection:'row',
        borderBottomWidth:1,
        borderColor:'#fff',
        borderStyle:'solid',
        //elevation: 10,
    },
    Name:{
        width:BasicWH.Width-260,
        lineHeight:50,
        textAlign:'center',
        fontSize:16,
        color:'#fff',
    },
    Nameinput:{
        width:BasicWH.Width-160,
        height:50,
        textAlign:'left',
        color:'#fff',
        fontSize:16,
        padding:0
    },
    codeinput:{
        width:BasicWH.Width-260,
        height:50,
        textAlign:'left',
        color:'#fff',
        fontSize:16,
        padding:0
    },
    buttontext:{
        width:BasicWH.Width-60,
        lineHeight:40,
        textAlign:'center',
        color:'#fff',
        fontSize:16,
    },
    foget:{
        width:BasicWH.Width-60,
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