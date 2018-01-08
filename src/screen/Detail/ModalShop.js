import React, { Component } from 'react';
import { Image,View, StatusBar , FlatList,TouchableNativeFeedback,Alert} from 'react-native';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
import { Form,Picker ,Badge,Spinner,Container, Header, Item, Input, Icon, Separator,Button, Text, Body,Title, Left, Right,Content, Card, CardItem ,Thumbnail, List,ListItem, Footer,FooterTab, Radio, CheckBox   } from 'native-base';
import {connect} from 'react-redux';
//import {priceUpdate} from '../../Redux/Action/actionCreator'
import {infItemShopUpdate, infItemShopClear} from '../../Redux/Action/actionCreator';
import Currency from '../../Util/Currency';
import GetData from '../../Sever/getData'
import styles from './styles';
let data =[{
    id: 1,
    checked: false,
    name: 'Gong Cha Milk Foam',
    price: 16000
},
{
    id: 2,    
    checked: false,
    name: 'Pudding',
    price: 10000
},
{
    id: 3,    
    checked: false,
    name: 'Thạch Ai-Yu',
    price: 10000
},
{
    id: 4,    
    checked: false,
    name: 'Thạch Trái Cây',
    price: 10000
},
{
    id: 5,    
    checked: false,
    name: 'Đậu Đỏ',
    price: 10000
},
{
    id: 6,    
    checked: false,
    name: 'Trân Châu Trắng',
    price: 10000
}
,
{
    id: 7,    
    checked: false,
    name: 'Trân Châu Đen',
    price: 10000
}
,
{
    id: 8,    
    checked: false,
    name: 'Hột É',
    price: 10000
}
,
{
    id: 9,    
    checked: false,
    name: 'Sương Sáo',
    price: 10000
}
,
{
    id: 10,    
    checked: false,
    name: 'Thạch Dừa',
    price: 10000
}
,
{
    id: 11,    
    checked: false,
    name: 'Nha Đam',
    price: 10000
},
{
    id: 12,    
    checked: false,
    name: 'Thạch Nâu',
    price: 10000
},
];
class ModalShop extends Component {
    constructor(props){
        super(props)
        const {params} = this.props.navigation.state;                 
        this.state = {
            keyItemShop: params.keyItemShop,
            valueChange: params.valueProduct,
            valueProduct: params.valueProduct,
            dataItem: null,
            keyItem: params.keyItem,
            nameItem: params.nameItem,
            imageItem: params.imageItem,
            priceItem: params.priceItem,
            dataCheckbox : null,
            totalPrice: null,
            sugar: '70% Đường',
            ice:'30% Đá',
            sizes: 'Size M',
            valueItem: 1,
            itemBag: [],  
            listItem: [],
         };
    }
    componentDidMount(){
        GetData.getMenuItems((dataCheckbox) => {
            this.setState({
                dataCheckbox : dataCheckbox
            })
        })
        console.log('asdasds', this.props.inforitemshop)
    }
    onPressCheckbox(id){
        //var listItem = [];
       // var itemBag = [];
       // var arrayItem = [];       
        var price = '';        
        this.state.dataCheckbox = this.state.dataCheckbox.map(e => {
            if (e.id != id) return e;
            return {...e, checked: !e.checked,};                
        }),

        this.state.dataCheckbox.forEach(e =>{
            //console.log(e.checked);
            if(e.id != id) return e;
            if(!e.checked) {
                price = parseInt(this.state.priceItem) - parseInt(e.price) ;
                this.state.itemBag.forEach(a => {
                    console.log(e.id);
                    if (a.id == e.id) this.state.itemBag.splice(this.state.itemBag.indexOf(a.id), 1)
                })
            } else{
                price = parseInt(this.state.priceItem) + parseInt(e.price);
                this.state.itemBag.push(e)
            }
        })
        console.log('mang Item', this.state.itemBag)
       // listItem.filter(e => e.checked);
        this.setState({          
            //dataCheckbox: this.state.listItem,
           // itemBag: arrayItem,
            priceItem :  price.toString()
        })   
        
        //listItem = [];
        
    }
    onPressButtonSize(id){
        this.setState({
            dataSize: this.state.dataSize.map(e => {
                if (e.id !=id) return e;
                return {...e, selected: !e.selected}
            }),
        })
    }
    addItem = () =>{
        this.setState({
            valueItem: this.state.valueItem + 1,
            priceItem: (parseInt(this.state.priceItem) + parseInt(this.state.valueProduct)).toString(),
        })
    }
    minusItem = () =>{
        if(this.state.valueItem === 1){
            Alert.alert(
                null,
                'Bạn không thể mua dưới 1 sản phẩm',
                [
                  {text: 'Thoát', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                ],
                { cancelable: false }
              )
        } else{
            this.setState({
                valueItem: this.state.valueItem - 1,
                priceItem: (parseInt(this.state.priceItem)  - parseInt(this.state.valueProduct)).toString(),
            })
        }      
    }
    onAddtoCart=() =>{
        let callback = {
            valueProduct: this.state.valueProduct,
            nameItem: this.state.nameItem,
            imageItem: this.state.imageItem,
            info: this.state.itemBag,
            total: this.state.priceItem,
            value: this.state.valueItem,
            ice : this.state.ice,
            size : this.state.sizes,
            sugar : this.state.sugar,
            keyItem: this.state.keyItem
        }
        GetData.saveDataCart(this.state.keyItemShop,this.props.infouser.uid, callback  )
        this.setState({ 
            keyItem: null,
            nameItem: null,
            imageItem: null,
            priceItem: '',
            totalPrice: null,
            keyItemShop: null,
            itemBag: null,
            listItem: null,
            dataCheckbox: null,
            sizes: 'Size M',
            sugar: '70% Đường',
            ice : '30% Đá'
         })
         this.props.navigation.goBack() 
      }
    _renderPickItem = ({item}) => {       
        //const {imageItem, nameItem, priceItem} = this.props;        
        return (
            <View style = {{backgroundColor: 'white'}}>
            <TouchableNativeFeedback onPress = {() => this.onPressCheckbox(item.id)}>   
                <View style = {styles.row1}>
                <View style = {styles.rowItem} >
                <Radio selected = {item.checked}/>
                <Text style={{fontSize: 15, fontStyle: 'normal',  color: '#34495e',textAlign: 'center', marginLeft: 3}} numberOfLines = {2}>{item.name}</Text>
                </View>               
                <Text style={{fontSize: 13, fontStyle: 'normal',  color: '#34495e',textAlign: 'center'}}>{Currency.convertNumberToCurrency(parseInt(item.price)) + 'đ'}</Text>
                </View>
            </TouchableNativeFeedback>
            <View style ={styles.divider}></View>
            </View>            
        );
      } 
    render() {
        //const {imageItem, nameItem, priceItem} = this.props.itemProp
        return (
            <Container style = {styles.modalContent}>
               <Header androidStatusBarColor = "rgb(184, 47, 64)"  style={styles.headerModalShop}>
                   <View style = {styles.row}>
                   <Image style = {styles.item} source={{ uri : this.state.imageItem} } />
                    <View style = {styles.center}>
                    <Text  style = {styles.titleItem} numberOfLines = {1}>{this.state.nameItem}</Text>
                   <Text note style = {styles.backgroundPrice} numberOfLines = {1}>{Currency.convertNumberToCurrency(this.state.valueChange)  + ' VNĐ'}</Text>
                   </View>
                   </View>
                <View style = {styles.itemBuy}>
                    <Button transparent onPress = {this.addItem}>
                   <Icon name = 'md-add-circle' style = {{fontSize: 25, color : '#54A8DD'}}/>
                   </Button>
                   <Text style = {{alignSelf:'center', justifyContent: 'center'}}>x{this.state.valueItem}</Text>
                   <Button transparent onPress = {this.minusItem}>
                    <Icon name = 'md-remove-circle' style = {{fontSize: 25, color : '#e53935'}}/>
                   </Button>  
                </View>
               </Header>
               <Content showsVerticalScrollIndicator={false}>
               <Separator bordered>
            <Text style = {styles.titleSeparator}>Thêm topping</Text>
             </Separator>
             <View>
                        {
                            this.state.dataCheckbox && <FlatList  data={this.state.dataCheckbox}
                            extraData= {this.state}
                            keyboardShouldPersistTaps='always'
                            removeClippedSubviews={true}
                            keyExtractor={(item) => item.id}
                            renderItem={this._renderPickItem}/>
                        }
                        {
                            !this.state.dataCheckbox && <View style={styles.loadingCategory}>
                             <Spinner color = '#e53935'/>
                          </View>        
                        }                       
             </View> 
             <Separator bordered>
               <Text style = {styles.titleSeparator}>Chọn size</Text>
             </Separator>
             <Form style = {{backgroundColor: '#FFF'}}>
                <Picker
                    style = {{color: '#34495e'}}
                    mode="dropdown"
                    placeholder="Select One"
                    selectedValue={this.state.sizes}
                    onValueChange={value => this.setState({ sizes : value})}
               >
                 <Item label="Size M" value="Size M" />
                 <Item label="Size L" value="Size L" />
               </Picker>
             </Form>
             <Separator bordered>
               <Text style = {styles.titleSeparator}>Mức đường</Text>
             </Separator>
             <Form style = {{backgroundColor: '#FFF'}}>
                <Picker
                    style = {{color: '#34495e'}}
                    mode="dropdown"
                    placeholder= "Select One"
                    selectedValue={this.state.sugar}
                    onValueChange={value => this.setState({ sugar: value})}
               >
                 <Item label="70% Đường" value="70% Đường" />
                 <Item label="30% Đường" value="30% Đường" />
                 <Item label="50% Đường" value="50% Đường" />
                 <Item label="100% Đường" value="100% Đường" />
                 <Item label="Không Đường" value="Không Đường" />
               </Picker>
             </Form>
             <Separator bordered>
               <Text style = {styles.titleSeparator}>Mức đá</Text>
             </Separator>
             <Form style = {{backgroundColor: '#FFF'}}>                                       
                <Picker
                    style = {{color: '#34495e'}}
                    mode="dropdown"
                    placeholder="Select One"
                    selectedValue={this.state.ice}
                    onValueChange={value => this.setState({ ice: value})}
               >
                 <Item label="30% Đá" value="30% Đá" />
                 <Item label="70% Đá" value="70% Đá" />
                 <Item label="50% Đá" value="50% Đá" />
                 <Item label="100% Đá" value="100% Đá" />
                 <Item label="Không Đá" value="Không Đá" />
               </Picker>
             </Form>
           </Content>
           <Footer style = {{backgroundColor : 'transparent', height: undefined}}>      
              <Button iconLeft style = {{alignSelf: 'center', justifyContent: 'space-between', backgroundColor: '#54A8DD',flexDirection: 'row'}} onPress = {this.onAddtoCart.bind(this)}>
                   <Icon name='md-basket' style = {{fontSize: 25, color: '#FFF'}}/>
                   <Text style = {{fontSize: 15, color:'#FFF'}}>Thêm vào giỏ </Text>
                   <Text style = {{fontSize: 15, color:'#FFF'}}>{Currency.convertNumberToCurrency(this.state.priceItem) + ' VNĐ'}</Text>
               </Button>
           </Footer>
           </Container>
        );
    }
}
function mapStateToProps (state) {
	return {
        infouser: state.infouser,
        inforitemshop: state.arrayItemShop
	}
}
function mapDispatchToProps (dispatch) {
	return{
		dispatchInfoItemShopUpdate: (inforitemshop) => dispatch(infItemShopUpdate(inforitemshop)),
	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(ModalShop)