import React, { Component } from 'react';
import { 
   View,
   Text,
   StyleSheet, 
   FlatList,
   TouchableOpacity
 } from 'react-native';
 import Word from './Word'
 import Filter from './Filter'
 import Form from './Form';
 import Header from './Header';
import {connect} from 'react-redux';
class Main extends Component {
    state = {  }
    getWordList(){
        const {myFilter, myArrword} = this.props
        if(myFilter === 'SHOW_ALL') return myArrword
        if(myFilter === 'MEMORIZED') return myArrword.filter(e => e.memorized)
        if(myFilter === 'NEED_PRATICE') return myArrword.filter(e => !e.memorized)
        
    }
    render() {
        return (
            <View style = {{flex: 1, backgroundColor: '#007ACC'}}>
                <Header/>
                <View style = {{flex: 10}}>
                { this.props.myisAdding ? <Form/> : null }
                <FlatList 
                    data = {this.getWordList()}
                    renderItem= {({item}) =>  <Word myWord = {item}/>}
                    keyExtractor = {item => item.id}
                    extraData = {this.state}>
                </FlatList>
                </View>
                  <Filter/>            
            </View>
        );
    }
}
function mapStateToProps(state){
    return {
        myFilter: state.filterStatus,
        myArrword: state.arrWord,
        myisAdding: state.isAdding
    };
}
export default connect(mapStateToProps)(Main);