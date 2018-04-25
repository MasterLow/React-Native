
import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import {
    Image,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { Toast,Icon  } from 'antd-mobile';
//展示的页面
import Index from './Index';
import Ocean from './Ocean';
import Personal from './Personal';
import Classify from './Classify';

export default HomePage = TabNavigator({
    //每一个页面的配置
    Index: {
        screen: Index,
        navigationOptions: {
            tabBarLabel: '主页',
            tabBarIcon: ({tintColor}) => (
                <Icon type="ellipsis" size="sm" color= {tintColor} />
                // <Image
                //     source={require('')}
                //     style={[{height: 24, width: 24}, {tintColor: tintColor}]}/>
            ),
        },
    },
    Ocean: {
        screen: Ocean,
        navigationOptions: {
            tabBarLabel: '海洋',
            tabBarIcon: ({tintColor}) => (
                <Icon type="check-circle" size="sm" color= {tintColor} />
                // <Image
                //     source={require('')}
                //     style={[{height: 24, width: 24}, {tintColor: tintColor}]}/>
            ),
        }
    },
    Classify: {
        screen: Classify,
        navigationOptions: {
            tabBarLabel: '类别',
            tabBarIcon: ({tintColor}) => (
                <Icon type="ellipsis" size="sm" color= {tintColor} />
                // <Image
                //     source={require('')}
                //     style={[{height: 24, width: 24}, {tintColor: tintColor}]}/>
            ),
        }
    },
    Personal: {
        screen: Personal,
        navigationOptions: {
            tabBarLabel: '个人',
            tabBarIcon: ({tintColor}) => (
                <Icon type="check-circle" size="sm" color= {tintColor} />
                // <Image
                //     source={require('')}
                //     style={[{height: 24, width: 24}, {tintColor: tintColor}]}/>
            ),
        }
    },

}, {
    //设置TabNavigator的位置
    tabBarPosition: 'bottom',
    //是否在更改标签时显示动画
    animationEnabled: true,
    //是否允许在标签之间进行滑动
    swipeEnabled: true,
    //按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    backBehavior: "none",
    //设置Tab标签的属性

    tabBarOptions: {
        //Android属性
        upperCaseLabel: false,//是否使标签大写，默认为true
        //共有属性
        showIcon: true,//是否显示图标，默认关闭
        showLabel: true,//是否显示label，默认开启
        activeTintColor: '#8067E7',//label和icon的前景色 活跃状态下（选中）
        inactiveTintColor: '#7d7d7d',//label和icon的前景色 活跃状态下（未选中）
        style: { //TabNavigator 的背景颜色
            backgroundColor: 'white',
            height: 55,
        },
        indicatorStyle: {//标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
            height: 0,
        },
        labelStyle: {//文字的样式
            fontSize: 13,
            marginTop: -5,
            marginBottom: 5,
        },
        iconStyle: {//图标的样式
            marginBottom: 5,
        },
    },
});