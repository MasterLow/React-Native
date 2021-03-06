
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Text,View,ScrollView  } from 'react-native';

import Test from '../../Test';
import Network from '../../Network';
import Login from '../../Login';
import HomePage from '../HomePage/HomePage';
import HeadTitle from '../HeadTitle/HeadTitle';
import Webview from '../Webview';


export default Router = StackNavigator({
    //默认加载第一个页面，这里用来注册需要跳转的页面 相当于Manifest.xml文件
    Test: {
        screen: Test,
    },
    HomePage: {
        screen: HomePage,
    },
    HeadTitle: {
        screen: HeadTitle,
    },
    Network: {
        screen: Network,
    },
    Webview: {
        screen: Webview,
    },
    Login: {
        screen: Login,
    },
    
});