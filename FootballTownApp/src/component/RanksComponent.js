
import React, {Component} from 'react';
import Ranks_page from '../views/Ranks_page'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

class RanksComponent extends Component{
  render() {
    return (
   <Ranks_page/>


    );
  }
}
export default RanksComponent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

