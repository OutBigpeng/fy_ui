/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  NetInfo,
  Animated,
  StyleSheet,
  View,
  Text,
  Platform,
} from 'react-native';
import global from  './app/common/global';
import NetInfoDecorator from './app/common/NetInfoDecorator';
import Root from './app/Root';
global.nowRouteName='';
console.disableYellowBox = true;
@NetInfoDecorator
export default class App extends Component<{}> {
  constructor(props) {
        super(props);
        this.state = {
            promptPosition: new Animated.Value(0),
        }
    }
    componentWillReceiveProps(nextProps) {
        const {isConnected} = nextProps
        // 无网络
        if (!isConnected) {
            Animated.timing(this.state.promptPosition, {
                toValue: 1,
                duration: 200
            }).start(() => {
                setTimeout(() => {
                    Animated.timing(this.state.promptPosition, {
                        toValue: 0,
                        duration: 200
                    }).start()
                }, 2000);
            })
        }
    }
  render() {
    let positionY = this.state.promptPosition.interpolate({
        inputRange: [
            0, 1
        ],
        outputRange: [
            -30, Platform.OS === 'ios'
                ? 20
                : 0
        ]
    });
    return (
      <View style={styles.container}>
        <Root onNavigationStateChange={(prevState,currentState)=>{
            nowRouteName = currentState.routes[currentState.routes.length-1].routeName;
          }} />
         <Animated.View style={[
             styles.netInfoView, {
                 top: positionY
             }
         ]}>
             <Text style={styles.netInfoPrompt}>网络异常，请检查网络稍后重试~</Text>
         </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  netInfoView: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        position: 'absolute',
        right: 0,
        left: 0,
        backgroundColor: 'rgb(217, 51, 58)'
    },
    netInfoPrompt: {
        color: 'white',
        fontWeight: 'bold'
    }
});
