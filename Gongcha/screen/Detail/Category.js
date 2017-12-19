import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity,Dimensions, FlatList,ActivityIndicator } from "react-native";
import {
    Spinner,
    Thumbnail,
    List,
    ListItem,
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
	Item,
  Form,
	Input,
  Item as FormItem
} from "native-base";
import GetData from '../../Sever/getData';
import Modal from 'react-native-modal'
import ModalShop from './ModalShop';
import styles from './styles';
export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            nameItem:null,
            imageItem:null,
            priceItem:null,
            isModalShopVisible: false,       
         };
      }
    componentDidMount(){
        GetData.getItemByCategory(this.props.category,(data) =>{
          this.setState({
            data: data
          })
        })
      }
      _renderMenuItem = ({item}) => {       
        //const {imageItem, nameItem, priceItem} = this.props;        
        return (
            <List transparent >
            <ListItem button onPress = {()=> this.onPressItem(item)}>                 
            <Left>
             <Thumbnail square size={80} source={{ uri : item.imageItem} } />
             <Body>
                 <Text numberOfLines = {1}>{item.nameItem}</Text>
                 <Text note></Text>
                 <Text note numberOfLines = {1}>{item.priceItem} VNĐ </Text>
               </Body>
             </Left>
             <Right>
                <Icon name = 'md-add-circle' style = {{fontSize: 30, color : '#007ACC'}}/>
             </Right>
             </ListItem>
            </List>   
        );
      } 
      _showModalShop = () => this.setState({ isModalShopVisible: true })
      _hideModalShop = () => this.setState({ isModalShopVisible: false })
      onPressItem(item){
          this.setState({
              nameItem: item.nameItem,
              imageItem: item.imageItem,
              priceItem: item.priceItem
          })
          this._showModalShop();
      }
   render() {
        return (
            <Container>
            <View style={styles.headerCategories}>
              <Text style={styles.titleCategories}>{this.props.category}</Text>
              <TouchableOpacity 
              >
                <Text style={styles.viewmore}>VIEW MORE</Text>
              </TouchableOpacity>
              </View>
              {
                  this.state.data && <FlatList
                  data = {this.state.data}
                  renderItem={this._renderMenuItem} 
                  removeClippedSubviews={true}
                  extraData= {this.state}                             
                  showsVerticalScrollIndicator ={false}
                  keyExtractor={(item) => item.key} />   
              }
              {
                  !this.state.data && <View style={styles.loadingCategory}>
                   <Spinner color = '#e53935'/>
                </View>        
              }                       
            <View style={styles.divider}>
            </View>
            <Modal isVisible={this.state.isModalShopVisible}
         animationIn={'zoomInDown'}
         animationOut={'zoomOutUp'}
       >
           {<ModalShop nameItem = {this.state.nameItem} imageItem = {this.state.imageItem} priceItem = {this.state.priceItem} onClick = {this._hideModalShop}/>}
        </Modal>
          </Container>
        );
    }
}