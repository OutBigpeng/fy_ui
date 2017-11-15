import React from 'react';
import {
  Platform,
  PixelRatio,
  TouchableOpacity,
  View,
  Text,
  ScrollView
} from 'react-native';
import {TabNavigator} from 'react-navigation';
import StackOptions from '../common/stackOptions';
import Splash from '../pages/Splash';
import My from '../pages/my';
import Index from '../pages/home';
import Order from '../pages/order';
import Consult from '../pages/consult';
/**
 * 底部导航栏
 * @type {[type]}
 */
const TabBarView = TabNavigator({
    Index: {
        screen: Index,
        navigationOptions: {
            tabBarLabel: '首页',
            header:null,
            tabBarIcon: ({tintColor, focused}) => (
              <Text style={{
                fontFamily:'iconfont',
                color: tintColor,
                fontSize:FONT_SIZE(24),
              }}></Text>),

        }
    },
    Order: {
        screen: Order,
        navigationOptions: {
            tabBarLabel: '订单',
            // header:null,
            tabBarIcon: ({tintColor, focused}) =>{
              return (
                <Text style={{
                  fontFamily:'iconfont',
                  color: tintColor,
                  fontSize:FONT_SIZE(24),
                }}></Text>
          )}
        }
    },
    Consult: {
        screen: Consult,
        navigationOptions:  {
            tabBarLabel: '咨询',
            header:null,
            tabBarIcon: ({tintColor, focused}) =>{
                return (
                  <Text style={{
                    fontFamily:'iconfont',
                    color: tintColor,
                    fontSize:FONT_SIZE(24),
                  }}></Text>
              )},
        }
        // navigationOptions: {
        //     tabBarLabel: '咨询',
        //
        //     tabBarIcon: ({tintColor, focused}) =>{
        //       return (
        //         <Text style={{
        //           fontFamily:'iconfont',
        //           color: tintColor,
        //           fontSize:FONT_SIZE(24),
        //         }}></Text>
        //   )}
        // }
    },
    My: {
        screen: My,
        navigationOptions: {
            tabBarLabel: '我的',
            header:null,
            tabBarIcon: ({tintColor, focused}) => (
              <Text style={{
                fontFamily:'iconfont',
                color: tintColor,
                fontSize:FONT_SIZE(24),
              }}></Text>)
        }
    }
}, {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    lazy: true,
    initialRouteName:'Order',
    tabBarOptions: {
        activeTintColor: '#fb787d', // 文字和图片选中颜色
        inactiveTintColor: '#464646', // 文字和图片默认颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {
            height: 0
        }, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了， 不知道还有没有其它方法隐藏？？？
        style: {
            backgroundColor: 'white', // TabBar 背景色
            borderTopWidth: 1 / PixelRatio.get(),
            height: 52,
            borderTopColor: '#eae2e0',
        },
        // iconStyle :{
          // width:50,
          // height:20,
        //  height:30,
          // alignSelf:'center'
          //backgroundColor: '#dddddd', // TabBar 背景色
        // },
        labelStyle: {
            fontSize: FONT_SIZE(12), // 文字大小
            // margin:0,
            marginLeft: 0,
            marginRight: 0,
            marginTop: 2,
            marginBottom: 2,

        }
    }
})


export default Routes = {
    Index: {
        screen: iOS
            ? TabBarView
            : Splash,
        // navigationOptions: ({navigation}) => ({header: null})
    },
    TabBarView: {
        screen: TabBarView,
    },

}
