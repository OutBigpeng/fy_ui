import React, {Component} from 'react'
import {
    View,
    Platform,
    Text
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Routes from './routes';

export default StackNavigator({
  ...Routes
},{
  initialRouteName:'Index',
  mode: iOS ? 'modal' : 'card',
}
)
