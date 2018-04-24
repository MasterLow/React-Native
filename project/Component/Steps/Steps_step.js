
import React, { Component } from 'react';
import { Text,View,ScrollView,TouchableOpacity  } from 'react-native';
import { Toast  } from 'antd-mobile';

function stepsClick() {
  Toast.info('Toast without mask !!!', 2, null, false);
}
class StepsA extends Component {

  constructor(props){
    super(props)
    this.state = {
      
    }
    }

  JumpClick = (url) => {
     //Toast.info(JSON.stringify(this.props), 10);
     if(url)this.props.navigate(url, {key: '传递的参数'});
     
   }
   
  render() {
    const maxLenfth = this.props.data.steps.length;
    return (
      <View>
          {this.props.data.steps.map((s, i) =>
             <View key={i}>
             {
               i==0 ? null:
               <View style={{width:200,height:50,display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <View style={{width:15,height:15,borderBottomColor:'#0f8cf0',borderBottomWidth:2,borderRightColor:'#0f8cf0',borderRightWidth:2,transform:[{rotate:'45deg'}]}}></View>
               </View>
             }
              <TouchableOpacity onPress={()=>{ let url = s.url; this.JumpClick(url); } }>
             <View style={{display:'flex',flexDirection:'row'}}>
                <View style={{width:50,height:50,display:'flex',alignItems:'center',justifyContent:'center'}}>
                      <View style={{width:25,height:25,borderRadius:25,display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'#0f8cf0'}}>
                                <Text style={{color:'#fff'}}>{i+1}</Text>
                      </View>
                </View>
                <View>
                      <View style={{width:150,minHeight:50,display:'flex',alignItems:'center',justifyContent:'center'}}>
                          <Text style={{color:'#000'}}>{s.title}</Text>
                      </View>
                      <View style={{width:150,minHeight:50,backgroundColor:'#eee'}}>
                          <Text style={{color:'#777'}}>{s.description}</Text>
                      </View>
                </View>
             </View>
             </TouchableOpacity>
           </View>
           )}
      </View>
    );
  }
}
export default StepsA;