import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Image,
  Easing,
  Button
} from 'react-native';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';

export default class Index extends Component{
  static navigationOptions={
    headerTitle:(
      <Text style={{
        fontSize:FONT_SIZE(18),
        alignSelf:'center',
        fontWeight:'300',
        color: 'black',
        textAlign: 'center',
      }}>订单</Text>
    ),
    headerLeft:<View />,
    headerRight:<View />,
    headerStyle : {
      height:iOS?64 : 50,
      // width: SCREEN_WIDTH ,
      paddingTop: iOS ? 20 : 0,
      // justifyContent: 'center',
      // alignItems: 'center',
      borderColor: '#c8c7cc',
      borderBottomWidth: StyleSheet.hairlineWidth,
      backgroundColor: '#ffffff'
    },
  }
  constructor () {
    super()
    this.animatedValue = new Animated.Value(0)
  }
  componentDidMount () {
     this.animate()
  }
  animate () {
  this.animatedValue.setValue(0)
  Animated.timing(
    this.animatedValue,
    {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear
    }
  ).start(() => this.animate())
}
  render(){
    const marginLeft = this.animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 300]
  })
  const opacity = this.animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 1, 0]
  })
  const movingMargin = this.animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 300, 0]
  })
  const textSize = this.animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [18, 32, 18]
  })
  const rotateX = this.animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['0deg', '180deg', '0deg']
  })
    return (
      <View style={styles.container}>
        <ScrollableTabView
          style={{marginTop: 20, }}
          initialPage={1}
          renderTabBar={() => <DefaultTabBar />}
        >
          <Text tabLabel='Tab #1'>My</Text>
          <Text tabLabel='Tab #2'>favorite</Text>
          <Text tabLabel='Tab #3'>project</Text>
        </ScrollableTabView>

        <Text>订单</Text>
        <Animated.View
        style={{
          marginLeft,
          height: 30,
          width: 40,
          backgroundColor: 'red'}} />
      <Animated.View
        style={{
          opacity,
          marginTop: 10,
          height: 30,
          width: 40,
          backgroundColor: 'blue'}} />
      <Animated.View
        style={{
          marginLeft: movingMargin,
          marginTop: 10,
          height: 30,
          width: 40,
          backgroundColor: 'orange'}} />
      <Animated.Text
        style={{
          fontSize: textSize,
          marginTop: 10,
          color: 'green'}} >
          Animated Text!
      </Animated.Text>
      <Animated.View
        style={{
          transform: [{rotateX}],
          marginTop: 50,
          height: 30,
          width: 40,
          backgroundColor: 'black'}}>
        <Text style={{color: 'white'}}>Hello from TransformX</Text>
      </Animated.View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1
  }
});
