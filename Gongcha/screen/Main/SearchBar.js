import React, { Component } from "react";
import { Image,Platform, StyleSheet, TouchableOpacity, FlatList, Keyboard, BackHandler,TouchableNativeFeedback} from "react-native";
import { connect } from 'react-redux'
import { infItemShopUpdate,infItemShopClear,infItemShopDelete } from '../../Redux/Action/actionCreator'
import styles from './styles';
import GetData from '../../Sever/getData'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Right,
  Body,
  Left,
  List,
  Item,
  ListItem,
  Picker,
  Form,
  View,
  Input,
  H3,
  Item as FormItem,
  Thumbnail
} from "native-base";

class Search extends Component {
  constructor(props) {
		super(props);
    this._BackHandler = this._BackHandler.bind(this)
    this.state = {
      itemShop: null,
      searchtext: '',
      showclose: false,
      showresult: false,
    };
  }
  _BackHandler = () => {
    this.props.navigation.goBack()
    return true;
  }
  componentDidMount (){
    //BackHandler.addEventListener('hardwareBackPress', this._BackHandler)
  }
  componentWillUnMount (){
    //BackHandler.removeEventListener('hardwareBackPress', this._BackHandler)
  }
  getData(){
    GetData.getShopItem((itemShop) => {
      this.setState({
        itemShop: itemShop
      })
  })
  }
  filterItems(query) {
    GetData.getShopItem((itemShop) => {
      const newData =  itemShop.filter(function(item) {
        const itemData = item.nameShop.toLowerCase().replace(/\s+/g, '').
        replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a").
        replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e").
        replace(/ì|í|ị|ỉ|ĩ/g,"i").
        replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o")
        .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u")
        .replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y")
        .replace(/đ/g,"d")
        console.log('NameItem',itemData)
        const textData = query.toLowerCase().replace(/\s+/g, '').
        replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a").
        replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e").
        replace(/ì|í|ị|ỉ|ĩ/g,"i").
        replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o")
        .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u")
        .replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y")
        .replace(/đ/g,"d")
        console.log('query',textData)

        return itemData.indexOf(textData) > -1;
    })
    this.setState({
      itemShop: newData
    })
    console.log('Search', newData)
    console.log('Searchdata', this.state.itemShop)
    })
   

  }
  _renderItem = ({item}) => (
    <View removeClippedSubviews={true}>
      <TouchableOpacity onPress={() => {
          this.setState({searchtext: item, showresult: true, showclose: false})
          Keyboard.dismiss()
        }}>
        <View style={styles.row1}>
          <Text>{item}</Text>
          <TouchableOpacity onPress={() => this.props.dispatchSearchDelete(item)}>
            <Icon style={{color: 'rgb(184, 47, 64)'}} name="md-close" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
  _renderSearch = ({item})=>{
    return (
        <TouchableNativeFeedback onPress = {() => {this.props.navigation.navigate('Detail', {data : item.key})}}>
            <View style = {{flexDirection : 'row', backgroundColor: '#FFF'}}>
            <Image source={{uri: item.imageShop}} style={styles.imageNewShop}>
           </Image>                
           <View style = {{marginLeft: 5, flex: 1}}>
           <Text numberOfLines = {1} style ={styles.titleHotSale}>{item.nameShop}</Text>
           <Text  numberOfLines = {1} style ={styles.titleadress}>{item.addressShop}</Text>
           <View style = {{flexDirection: 'row'}}>
           
            <Text  numberOfLines = {1} style ={{ fontSize: 13,
            fontStyle: 'normal', paddingVertical: 10}}>(180)</Text>
           </View>
           <Text  numberOfLines = {1} style ={{ fontSize: 13,
            fontStyle: 'normal', paddingVertical: 10}}>Cafe/Desert</Text>
            </View> 
            </View>              
        </TouchableNativeFeedback>    
    );
}
  render() {
    return (
      <Container style={styles.container}>
        <Header searchBar  rounded androidStatusBarColor='transparent' style={{backgroundColor: 'rgb(184, 47, 64)', alignItems: 'center'}}>
          <Item>
            <Icon name="ios-search" />
            <Input style={{height: 60}}
              autoFocus={true}
              value={this.state.searchtext}
              returnKeyType='search'
              onSubmitEditing={() => {
                if(this.props.search.indexOf(this.state.searchtext) === -1 && this.state.searchtext.trim() !== '')
                this.props.dispatchSearchAdd(this.state.searchtext)
              }}
              onChangeText={(text) => {
                this.setState({searchtext: text})
                this.filterItems(this.state.searchtext)
              }}
              onEndEditing={() => {
                this.filterItems(this.state.searchtext)
                this.setState({showclose: false, showresult: true})
              }}
              onFocus={() => this.setState({showclose: true, showresult: false})}
              placeholder="Gongcha, TheCoffeeHose,...." />
              {
                this.state.showclose && <TouchableOpacity onPress={() => this.setState({searchtext: ''})}>
                  <Icon name="md-close" />
                </TouchableOpacity>
              }
          </Item>
        </Header>
        {
          !this.state.showresult && <View style={styles.row1}>
            <Text style={{color: 'rgb(184, 47, 64)'}}>Search history</Text>
            <TouchableOpacity onPress={() => this.props.dispatchSearchClearAll()}>
                <Text style={{color: 'rgb(184, 47, 64)'}}>Clear all</Text>
            </TouchableOpacity>
          </View>
        }
        <Content keyboardShouldPersistTaps='always'>
        {
          !this.state.showresult && <View>
          <FlatList
            data={this.props.search}
            extraData= {this.state}
            keyboardShouldPersistTaps='always'
            removeClippedSubviews={true}
            keyExtractor={(item) => item}
            renderItem={this._renderItem}
          />
          </View>
        }
        {
          this.state.showresult && <FlatList  data={this.state.itemShop}
          extraData= {this.state}
          keyboardShouldPersistTaps='always'
          removeClippedSubviews={true}
          keyExtractor={(item) => item.key}
          renderItem={this._renderSearch}/>
        }
        </Content>
      </Container>
    );
  }
}

function mapStateToProps (state) {
	return {
		infouser: state.infouser,
        search: state.inforitemshop
	}
}
function mapDispatchToProps (dispatch) {
	return{
    dispatchSearchAdd: (search) => dispatch(infItemShopUpdate(search)),
    dispatchSearchDelete: (search) => dispatch(infItemShopDelete(search)),
    dispatchSearchClearAll: () => dispatch(infItemShopClear())
	}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
) (Search)
