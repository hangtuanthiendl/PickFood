import React, { Component } from 'react';
import {TextInput,Dimensions,TouchableNativeFeedback,Alert,View, StyleSheet, FlatList, Image, Modal} from 'react-native';
import { SwipeRow,Badge,Spinner,Container, Header, Item, Input, Icon, Separator,Button, Text, Body,Title, Left, Right,Content, Card, CardItem ,Thumbnail, List,ListItem, Footer,FooterTab, Radio, CheckBox   } from 'native-base';
import {connect} from 'react-redux'
import GetData from '../../Sever/getData'
import styles from './styles'
import stylesSetting from '../Account/styles';
import Currency from '../../Util/Currency'
import moment from 'moment';
import {NavigationActions }from 'react-navigation';
const {height, width} = Dimensions.get('window');

class ModalCart extends Component {
    constructor(props){
        super(props)
        this.state = {
            dataCart: [],
            dataKey: null,
            detailCart: null,
            totalPrice: '',
            itemInfo: null,
            dataTest: null,
            activeRowkey: null,
            method: 'Tiền mặt',
            note: 'Bạn cần ghi chú những gì?',
            sale: 'Không có',
            isModalOpen: false
        }
    }
    componentDidMount(){
        const {params} = this.props.navigation.state;                                 
        GetData.getDataCart(params.keyItemShop,this.props.infouser.uid, (dataCart)=>{
            var arrayPrice = [];
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            var totalPrice
            if (dataCart != 0) {
                dataCart.forEach(e =>{
                    arrayPrice.push(parseInt(e.total))
                  })         
                  totalPrice = arrayPrice.reduce(reducer)                   
            }
            this.setState({
                dataCart: dataCart,
                totalPrice: totalPrice,
                detailCart: dataCart
            })
        })
       
    }
    componentWillUnmount(){
        this.setState({
            dataCart: [],
            totalPrice: '',
            dataKey : null
        })
    }
    onCash = () =>{
        const {params} = this.props.navigation.state;                         
        let now = new Date()
        let callback = {
            total: this.state.totalPrice,
            nameShop: params.nameItemShop,
            addressShop: params.addressItemShop,            
            keyShop: params.keyItemShop,
            state: 0,
            timein : moment(now).format("DD/MM/YYYY hh:mm:ss"),
            timeout : moment(now).format("DD/MM/YYYY hh:mm:ss"),            
            detail: this.state.dataCart,
            method: this.state.method,
            sale: this.state.sale,
            note: this.state.note,
            number : this.state.dataCart.length.toString()
        }
        GetData.saveDataCash(this.props.infouser.uid, callback)
        GetData.removeCartItem(params.keyItemShop,this.props.infouser.uid)        
        Alert.alert(
            null,
            'Thanh toán thành công, bạn có thể kiểm tra đơn hàng ở lịch sử đặt hàng và chờ đợi thông báo từ cửa hàng',
            [
              {text: 'Có', onPress: () =>   this.props.navigation.goBack()},
            ],
            { cancelable: false }
          )
   }
   _deleteItem(item) {
    const {params} = this.props.navigation.state;                         
    Alert.alert(
        null,
        'Bạn có chắc chắn muốn xóa ' + item.nameItem + ' không?',
        [
          {text: 'Không', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'Có', onPress: () =>   {
              GetData.removeItemCart(params.keyItemShop,this.props.infouser.uid, item.key)
              GetData.getDataCart(params.keyItemShop,this.props.infouser.uid, (dataCart)=>{
                var arrayPrice = [];
                const reducer = (accumulator, currentValue) => accumulator + currentValue;
                var totalPrice
                if (dataCart != 0) {
                    dataCart.forEach(e =>{
                        arrayPrice.push(parseInt(e.total))
                      })         
                      totalPrice = arrayPrice.reduce(reducer)                   
                }
                this.setState({
                    dataCart: dataCart,
                    totalPrice: totalPrice,
                    dataKey: dataCart
                })
            })
          }},
        ],
        { cancelable: false }
      )
   }
   _hideModal() { this.setState({isModalOpen : false})}

    _renderItemCart = ({item, index}) => { 
        return (
            <SwipeRow
            disableRightSwipe={true}
            rightOpenValue={-50}
            body={
            <View style = {{backgroundColor: '#FFF' , flexDirection: 'row'}}>                               
            <View style = {{marginLeft: 5, flex: 1}}>
            <Text numberOfLines = {1} style ={styles.titleItemCart}>{item.nameItem +' x' + item.value + '=' + Currency.convertNumberToCurrency((item.valueProduct*item.value)) +'đ' }</Text>
            <Text numberOfLines = {1} style ={styles.titleadress}>{item.ice +', ' + item.sugar + ', '+ item.size}</Text>
            <View>
                  {item.info != null ? (item.info.map((e, i) => <Text note key={"key"+i}
                   numberOfLines = {1}>{e.name + ' x1' + ' = ' + Currency.convertNumberToCurrency(e.price) + 'đ'}</Text>)) : null}
              </View>
             </View>
             <Text note style = {styles.backgroundPrice1}>{'Tổng: '+Currency.convertNumberToCurrency(item.total) +'đ'}</Text>                     
           </View> 
              }
              right={
                <Button danger onPress={() => this._deleteItem(item)}>
                  <Icon active name="trash" />
                </Button>
              }
            >  
            </SwipeRow>
                
        );
      }
    render() {
        return (
            <Container style = {styles.container}>
           <Header androidStatusBarColor = 'rgb(184, 47, 64)' style = {{backgroundColor: 'rgb(184, 47, 64)'}}>
           <View style= {{justifyContent: 'space-between', flexDirection: 'row', flex: 1}}>
                   <View style = {styles.containerLogo}>
                       <Title style = {{textAlign: 'center', alignSelf: 'center', color: '#FFF'}}>{'Giỏ hàng của: ' + this.props.infouser.displayName}</Title>
                   </View>
                   <Right style = {{height: undefined, width: undefined}}>
                   <Button transparent onPress = {() => this.props.navigation.goBack()}>
                   <Icon name= 'md-close' style = {{fontSize: 25,  color: '#FFF',  alignSelf: 'center'}}/>
                   </Button>
                   </Right>
                   </View> 
           </Header> 
            <Content showsVerticalScrollIndicator={false}>
            <View>
            <TouchableNativeFeedback onPress = {() => this.setState({isModalOpen: true})} >
                     <View style = {stylesSetting.headerViewSetting}>
                        <Text style = {{fontStyle: 'normal', color: '#34495e'}}>Ghi chú</Text>
                        <Text note >{this.state.note}</Text>
                     </View>
            </TouchableNativeFeedback>
            <View >
                     <View style = {stylesSetting.headerViewSetting}>
                        <Text style = {{fontStyle: 'normal', color: '#34495e'}}>Mã khuyến mãi</Text>
                        <Text note >{this.state.sale}</Text>
                     </View>
            </View>
            <View >
                     <View style = {stylesSetting.headerViewSetting}>
                        <Text style = {{fontStyle: 'normal', color: '#34495e'}}>Phương thức thanh toán</Text>
                        <Text note >{this.state.method}</Text>
                     </View>
            </View>
            <View>
                     <View style = {stylesSetting.headerViewSetting}>
                        <Text style = {{fontStyle: 'normal', color: '#34495e'}}>{'Số sản phẩm: ' + this.state.dataCart.length.toString()}</Text>
                     </View>
            </View>
            </View>  
               <View style = {{marginTop: 5, backgroundColor: 'transparent', flex: 1}}>
                  {
                    this.state.dataCart.length != 0 && <FlatList
                    data = { this.state.dataCart}
                    renderItem={this._renderItemCart} 
                    ItemSeparatorComponent = {() => {return (<View style = {{height: 5}}/>)}}
                    removeClippedSubviews={true}
                    extraData= {this.state}                             
                    showsVerticalScrollIndicator ={false}
                    keyExtractor={(item) => item.key} /> 
                  }
                  {
                    this.state.dataCart.length === 0 && <View style = {styles.loadingCategory}>                  
                            {
                                !this.state.detailCart ? <Spinner color ='rgb(184, 47, 64)'/> : <Text style = {styles.titleNull}>Chưa có sản phẩm</Text> 
                            }        
                      </View>
                  }
              </View> 
            </Content>  
            <Footer style = {{backgroundColor : 'transparent', height: undefined}}>    
             {
                 this.state.dataCart.length != 0 ? <Button onPress ={this.onCash} iconLeft style = {{alignSelf: 'center', justifyContent: 'space-between', backgroundColor: '#54A8DD',flexDirection: 'row'}}  >
                 <Icon name='md-basket' style = {{fontSize: 25, color: '#FFF'}}/>
                    <Text style = {{fontSize: 15, color:'#FFF'}}>Thanh toán</Text>
                <Text style = {{fontSize: 15, color:'#FFF'}}>{Currency.convertNumberToCurrency(this.state.totalPrice) + 'VNĐ'}</Text>
            </Button> : null
             }
           </Footer> 
           <Modal animationType = 'slide'
           visible = {this.state.isModalOpen}     
            onRequestClose={() => this._hideModal()}>
                     <Container style = {styles.container}>
           <Header androidStatusBarColor = 'rgb(184, 47, 64)' style = {{backgroundColor: 'rgb(184, 47, 64)'}}>
           <View style= {{justifyContent: 'space-between', flexDirection: 'row', flex: 1}}>
                   <View style = {styles.containerLogo}>
                       <Title style = {{textAlign: 'center', alignSelf: 'center', color: '#FFF'}}>{'Ghi chú của: ' + this.props.infouser.displayName}</Title>
                   </View>
                   <Right style = {{height: undefined, width: undefined}}>
                   <Button transparent onPress = {() => this._hideModal()}>
                   <Icon name= 'md-close' style = {{fontSize: 25,  color: '#FFF',  alignSelf: 'center'}}/>
                   </Button>
                   </Right>
                   </View> 
           </Header> 
            <Content  keyboardShouldPersistTaps='always' showsVerticalScrollIndicator={false}>
            <View style = {{alignItems: 'center', marginTop: 10}}>
            <View style={{flex: 1,flexDirection: 'row',height: 150,width: height / 2.5,borderRadius: 5,borderColor: 'white',borderWidth: 0.5, backgroundColor: 'rgba(85, 79, 84,0.2)'}}>
                <TextInput style = {{color: 'white', height: 150 , width: height / 2.5, fontSize: 18, textAlignVertical: "top"}} 
                           placeholder='Bạn cần ghi chú những gì?'
                           keyboardType = 'email-address'
                           returnKeyType='next'
                           multiline= {true}
                           editable = {true}
                           numberOfLines = {4}
                           autoCapitalize= 'none'
                           autoFocus= {true}
                           autoCorrect = {false}
                           underlineColorAndroid = 'transparent'
                           placeholderTextColor= 'rgb(184, 181, 182)'  
                           onChangeText={(note) => this.setState({ note })}
                           value={this.state.note} />
            </View>
            </View>  
            </Content>     
        </Container>  
            </Modal>       
        </Container>
        );
    }
}

function mapStateToProps (state) {
	return {
        infouser: state.infouser,
        inforitemshop: state.inforitemshop        
	}
}
function mapDispatchToProps (dispatch) {
	return{
		dispatchInfoUserUpdate: (infouser) => dispatch(infUserUpdate(infouser)),
	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(ModalCart)