
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Text,View,ScrollView  } from 'react-native';

import Test from '../../Test';
import HomePage from '../HomePage/HomePage';
import HeadTitle from '../HeadTitle/HeadTitle';


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
    
});