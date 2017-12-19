import React , { Component } from 'react';
import { View, FlatList } from 'react-native';
import GetData from '../../Sever/getData';
import styles from './styles';
import {Spinner, Card, CardItem, Text} from 'native-base';
export default class Menu extends Component {
    state = {  }
    constructor(props){
        super(props)
        this.state = {
            itemCategories: null
        }
    }
    componentDidMount(){
        GetData.getCategories((itemCategories) =>{
            this.setState({
                itemCategories: itemCategories
            })
        })
    }
    _renderCategory = ({item}) => {             
        return (
            <Card>
            <CardItem button>                 
                 <Text numberOfLines = {1}>{item.category}</Text> 
             </CardItem>
            </Card>   
        );
      }
    render() {
        return (
            <View>
            {
                this.state.itemCategories && <FlatList
                data = {this.state.itemCategories}
                renderItem={this._renderCategory} 
                removeClippedSubviews={true}
                extraData= {this.state}    
                horizontal = {true}                         
                showsHorizontalScrollIndicator ={false}
                keyExtractor={(item) => item.category}
                >
                </FlatList>
            }
            {
                !this.state.itemCategories && <View style={styles.loadingCategory}>
                 <Spinner color = '#e53935'/>
              </View>        
            }     
        </View>
        );
    }
}