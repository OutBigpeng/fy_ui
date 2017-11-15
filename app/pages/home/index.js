import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper';
// import {Carousel} from 'teaset';
// const loading = require('../../resource/image_loading.gif');
const loading = require('../../resource/c.png');//如果使用gif图片APP闪退，暂时显示用其他图片代替
class Silde extends Component {
    constructor(props) {
      super(props);
      this.state={
        loaded:false
      }
    }
   _onLoad = ()=>{
     this.setState({loaded:true});
   }
   render(){
     const {props} = this;
     return (
       <View style={styles.slide}>

         <Image style={styles.image} onLoad={this._onLoad} source={props.source } />
         {
          !this.state.loaded && <View style={styles.loadingView}>
            <Image style={styles.loadingImage} source={loading} />
          </View>
        }
       </View>
     )
   }
}
const ImageButton = ({text,image,bgColor})=>{
  return (
    <View style={styles.item}>
      <View style={{
        borderRadius:50,
        backgroundColor:bgColor,
        height:60,
        width:60,
        alignItems:'center',
        justifyContent:'center'
      }}>
        {image}
      </View>
      <View>
        <Text style={{lineHeight:26,color:'black'}}>{text}</Text>
      </View>
    </View>
  )
}
const CusButton =({text,onPress})=>{
  return(
    <TouchableOpacity onPress={onPress} style={{
      width:SCREEN_WIDTH/2,
      backgroundColor:'#ffffff',
      height:45,
      borderColor:'#40b1db',
      borderWidth:1,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:20
    }}>
      <Text style={{
        color:'#40b1db',
        fontSize:FONT_SIZE(16),
      }}>{text}</Text>
    </TouchableOpacity>
  )
}
export default class Index extends Component{
  _request(){

  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Swiper loadMinimal loadMinimalSize={1}  loop={true} autoplay={true}>
            <Silde source={require('../../resource/carousel1.png')}    />
            <Silde source={require('../../resource/carousel2.png')}    />
         </Swiper>
       </View>
       <View style={styles.itemView}>
         {
           [
             {image:'',text:'产品业务',bgColor:'#ff6668'},
             {image:'',text:'房屋评估',bgColor:'#fe885a'},
             {image:'',text:'共享好单',bgColor:'#38d0d5'},
             {image:'',text:'新品推荐',bgColor:'#02c195'},
           ].map((item,index)=>{
             return (
               <ImageButton
                 text={item.text}
                 image={<Text style={{fontFamily:'iconfont',color: '#ffffff',fontSize:FONT_SIZE(30),}}>{item.image}</Text>}
                 bgColor={item.bgColor}
               />
             )
           })
         }
       </View>

       <View style={{height:10,}}>

       </View>

       <View style={{flex:1,backgroundColor:'#ffffff'}}>
          <View style={{height:25}}></View>
          <View style={{
            flexDirection:'row',
            width:SCREEN_WIDTH,
            justifyContent:'center'
          }}>
            <Text style={{color:'#2c2c2c',fontSize:FONT_SIZE(16)}}>房银所让您享受</Text>
            <Text style={{color:'#fa6e77',fontSize:FONT_SIZE(16)}}>最低月息优惠</Text>
          </View>
          <View style={{height:25}}></View>
          <View>
              <Image source={require('../../resource/home_bc.png')} style={{height:172,width:'100%',backgroundColor:'black'}} resizeMode={'cover'} />
              <View style={{
                position:'absolute',
                left:(SCREEN_WIDTH-151)/2
              }}>
                <View>
                    <Image source={require('../../resource/c.png')}style={{width:151,  height:151,}} resizeMode={'cover'} />
                    

                    <View style={{
                      position:'absolute',
                      top:0,
                      left:0,
                      width:151,
                      height:151,
                      alignItems:'center',
                      justifyContent:'center',
                      marginTop:-12
                    }}>
                      <Text style={{color:'#ffffff',fontSize:FONT_SIZE(16)}}>月利息</Text>
                      <View style={{height:10}}></View>
                      <Text style={{color:'#ffffff',fontSize:FONT_SIZE(30)}}>0.625</Text>
                    </View>
                </View>

              </View>

          </View>

          <View style={{
            alignItems:'center',
          }}>
              <CusButton text={'立即申请'} onPress={this._request} />
          </View>

       </View>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#eceff6'
  },
  wrapper:{
    height:150,
  },
  image:{
    width:SCREEN_WIDTH,
    height:150
  },
  slide: {
    height:150,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  itemView:{
    flexDirection:'row',
    paddingTop:5,
    paddingBottom:5,
    backgroundColor:'#ffffff'
  },
  item:{
    width:SCREEN_WIDTH/4,
    height:100,
    alignItems:'center',
    justifyContent:'center',
  },
  loadingView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.5)'
  },

  loadingImage: {
    width: 50,
    height: 50
  }
});
