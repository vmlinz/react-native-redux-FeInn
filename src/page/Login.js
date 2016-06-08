
import React , { Component } from 'react';
import {
  Navigator ,
  View ,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';
import TabShow from '../components/TabShow';
import Camera from 'react-native-camera';
import Icon from 'react-native-vector-icons/Ionicons';
import { randomBg } from '../utils';
import QrCode from './QrCode';

export default class Login extends Component {
  constructor (props){
    super(props);
  }

  login (){
    const { navigator } = this.props;
    Camera.checkDeviceAuthorizationStatus().then( (isAuth) =>{
      if(isAuth){
        navigator.push({
          component : QrCode
        })
      }else{
        alert('请前往设置')
      }
    }).catch( (err) =>{
      alert(err)
    })

    // data.then((res)=>{
    //   console.log(res)
    // })
  }

  renderHeader (){
    const {isLogin} = this.props;
    return (
      <View style={[styles.userHeader,{backgroundColor:randomBg()}]}>
        <View style={styles.userImgWrap}>
          <View style={styles.userImgBox}>
            <Image
              style={[styles.userImg]}
              source={{uri : 'http://test.imgs.wn518.com/upimages/ys-sales/2016-03-29/87e08bb58a0a9b57bcd035fbf6bb4e02_1_0_0_420_420_1.jpg'}}
            />
          </View>
          <View style={styles.userName}>
            {
              isLogin ?
              <Text style={{textAlign:'center',color:textColor,fontSize:16}}>十三把刀</Text> :
              <TouchableOpacity onPress={this.login.bind(this)}>
              <Text style={{textAlign:'center',color:textColor,fontSize:16}}>登陆</Text>
              </TouchableOpacity>
            }
          </View>
        </View>
        <View style={styles.userInfo}>
          <Text style={{textAlign:'center',color:textColor}}>2121/122</Text>
          <Text style={{textAlign:'center',color:textColor}}>注册时间：2015/01/01</Text>
        </View>
      </View>
    )
  }
  render (){
    const pointContent = (()=>{
      return (
        <Icon
          name='md-arrow-back'
          size={ 30 }
          color='rgba(255,255,255,1)'
        />
      )
    })();

    return (
      <View style={[styles.container]}>
        <View>
          {this.renderHeader()}
        </View>
        <TabShow {...this.props}
          content={pointContent}
          wrapStyle={styles.wrapStyle}
         />
      </View>
    )
  }
}

const { width , height } = Dimensions.get('window');
const userImgWidth = 80;
const textColor = '#fff'
const styles = StyleSheet.create({
  container : {
    flex : 1,
  },
  userImgWrap : {
    flex : 8,
    flexDirection : 'column',
    // alignItems : 'center',
    justifyContent : 'center'
  },
  userImgBox :{
    paddingTop:20,
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'center'
  },
  userName : {
    flex : 1,
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center',
  },
  userInfo : {
    flex : 2,
    flexDirection : 'row',
    alignItems : 'center',
    paddingHorizontal : 10,
    justifyContent : 'space-between'
  },
  userHeader : {
    height :height/4
  },
  userImg : {
    width : userImgWidth,
    height : userImgWidth,
    borderRadius : userImgWidth/2
  },
  wrapStyle : {
    flex : 1,
    position:'absolute',
    left : 20,
    bottom : 25,
  },
})
