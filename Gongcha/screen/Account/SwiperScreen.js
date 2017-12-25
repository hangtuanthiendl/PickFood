import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, AsyncStorage, ImageBackground } from 'react-native'
import Swiper from 'react-native-swiper'
import Styles from './styles'
import {NavigationActions} from 'react-navigation'
export default class SiwperScreen extends Component {
    
    Click(){
        try{
            AsyncStorage.setItem('key',JSON.stringify(true))
            this.props.navigation.dispatch(NavigationActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({ routeName: 'CheckLogin'})
                ]
              })
            )
        }
        catch(e){
            console.log(e);
        }
        
    }
    render() {
        return (
            <Swiper style={styles.wrapper}
                autoplay={true}
                dot={<View style={{ backgroundColor: '#f1f0f348', width: 10, height: 10, borderRadius: 7, marginLeft: 7, marginRight: 7 }} />}
                activeDot={<View style={{ backgroundColor: '#FFF', width: 10, height: 10, borderRadius: 7, marginLeft: 7, marginRight: 7 }} />}
                loop={false}
                index={0}
            >
                <View>
                    <ImageBackground source={require('../../Image/splash/swiper_1.jpg')} style={Styles.imagebackgroundSplash}>
                        <View style={styles.view_image}>
                            <Text style={styles.text_tieude}>TÍCH ĐIỂM NGAY,QUÀ TRAO TAY</Text>
                            <Text style={styles.text_noidung}>Đăng nhập ,PickFood sẽ mang đến bất ngờ cho bạn</Text>
                        </View>
                       
                    </ImageBackground>
                    
                </View>
                <View>
                    <ImageBackground source={require('../../Image/splash/swiper_3.jpg')}style={Styles.imagebackgroundSplash}>
                    <View style={styles.view_image}>
                        <Text style={styles.text_tieude}>CẬP NHẬT TIN TỨC</Text>
                        <Text style={styles.text_noidung}>Theo dõi thông tin,chương trình mới nhất từ PickFood</Text>
                    </View>
                    </ImageBackground>
                </View>
                <View>
                    <ImageBackground source={require('../../Image/splash/swiper_2.jpg')}style={Styles.imagebackgroundSplash}>
                      <View style={styles.view_image}>
                        <Text style={styles.text_tieude}>DANH SÁCH CỬA HÀNG</Text>
                        <Text style={styles.text_noidung}>PickFood ở quanh bạn.Đến PickFood gần nhất nào!</Text>
                       </View>
                        <TouchableOpacity 
                            style={{ position: 'absolute', bottom: 20, left: Dimensions.get('window').width - 70, }}
                            onPress={()=>{this.Click()}}
                        >
                            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Xong</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                   
                </View>
            </Swiper>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text_tieude: {
        color: '#fff',
        fontSize: 22,
        marginTop:10,
        fontWeight: 'bold',
    },
    text_noidung: {
        color: '#fff',
        fontSize: 15,
    },
    view_image:{
        backgroundColor:'#2e2d2d65',
        marginTop:Dimensions.get('window').height/2,
        height:100,
        width:Dimensions.get('window').width,
        justifyContent:'center',
        alignItems:'center',
    }
});