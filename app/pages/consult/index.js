import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import {ListRow} from 'teaset';
const elements = [
  '在线咨询','客服电话','贷款计算器','建委查询','征信查询','公证处查询'
]
const elements1 = [
  '房屋抵押流程','资料清单'
]
export default class Index extends Component{
  render(){
    return (
      <View style={styles.container}>
        <Header title={'咨询'} />
        <View style={{
          paddingTop:10
        }}>
          {
            elements.map((item,index)=>{
              return(
                <ListRow bottomSeparator={index == elements.length-1 ? 'none':'indent' } title={item} style={{height:50}} accessory='indicator' titleStyle={{fontSize:FONT_SIZE(16)}}/>
              )
            })
          }
          <View style={{height:10}}></View>
          {
            elements1.map((item,index)=>{
              return(
                <ListRow bottomSeparator={index == elements1.length-1 ? 'none':'indent' } title={item} style={{height:50}} accessory='indicator' titleStyle={{fontSize:FONT_SIZE(16)}}/>
              )
            })
          }
        </View>
      </View>
    )
  }
}
const Header = ({title})=>{
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title || ''}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#eceff6'
  },
  header: {
    height:iOS?64 : 50,
    width: SCREEN_WIDTH ,
    paddingTop: iOS ? 20 : 0,
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: gColors.border,
    // borderBottomWidth: StyleSheet.hairlineWidth,
    backgroundColor: '#fff'
  },
  title: {
      textAlign: 'center',
      color: 'black',
      fontSize: FONT_SIZE(18),
      fontWeight:'300'
  }
});
