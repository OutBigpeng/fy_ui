// import React from 'react';
// import Icon from 'react-native-vector-icons/Ionicons';
// import {
//   TouchableOpacity,
//   Platform,
//   View,
//   Text
// } from 'react-native'
// const StackOptions = ({navigation}) => {
//     let {state, goBack} = navigation;
//
//     // 用来判断是否隐藏或显示header
//     const visible = state.params.isVisible;
//     let header;
//     if (visible == undefined || visible === true) {
//         header = null;
//     }
//     const headerStyle = {
//         // flexDirection: 'row',
//         height: Platform.OS === 'ios'
//             ? 64
//             : 50,
//         // paddingTop: Platform.OS === 'ios'
//         //     ? 20
//         //     : 0,
//         //  alignItems: 'center',
//         // borderBottomColor: '#ccc',
//         // borderBottomWidth: 0.5,
//         backgroundColor: '#219772',
//         // alignSelf:'center'
//         // justifyContent: 'center'
//     };
//     const headerTitle = state.params.title;
//     const headerTitleStyle = {
//         fontSize: FONT_SIZE(18),
//         color: 'white',
//         alignSelf: 'center',
//         fontWeight:'normal'
//         // justifyContent: 'center'
//     }
//     const headerBackTitle = false;
//     //是否显示头部左上角的后退按钮(默认为true)
//     let headerLeftVisible = state.params.headerLeftVisible;
//     if(headerLeftVisible == undefined)  headerLeftVisible=true;
//     const headerLeft = (
//           headerLeftVisible ?
//             <TouchableOpacity  onPress={()=>goBack()} style={{paddingLeft:20}}>
//
//                 <Icon name='ios-arrow-back-outline' size={30} color='white' style={{
//                     // marginLeft: 20
//                 }}/>
//
//           </TouchableOpacity>
//           : null
//     );
//     const headerRight=(
//       // {
//         //左边偏移的时候，右边也需要同时偏移，不然标题不居中
//       // }
//         <TouchableOpacity
//           activeOpacity={0.75}
//           onPress={state.params.rightAction}>
//           <View style={{paddingRight:20}}>
//             {state.params.rightElem}
//           </View>
//       </TouchableOpacity>
//     );
//
//     // const headerBackTitleStyle ={
//     //   alignItems:'center'
//     // }
//     return {
//         headerStyle,
//         headerTitle,
//         headerTitleStyle,
//         headerBackTitle,
//         headerLeft,
//         header,
//         headerRight,
//         // headerBackTitleStyle
//     }
// };
// export default StackOptions;
