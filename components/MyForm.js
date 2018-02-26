/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Picker,
  Platform,
} from 'react-native';
import SchoolPicker from './SchoolPicker';
import DatePicker from './DatePicker';

export default class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      text2: '',
    };
  }

  render() {
    return (
    <View style={styles.container}>
        <View style={styles.content}>
        <Text style = {styles.myLabel}>
            Choose your school
        </Text>
        <SchoolPicker />
        <Text style = {styles.myLabel}>
            What happened
        </Text>
        <TextInput
        placeholder="Describe a clearly as possible"
        style={styles.input}
        onChangeText={description => this.setState({description})}
        value = {this.state.description}
        />
        <DatePicker />
        <TouchableOpacity style={styles.buttoncontainer}>
            <Text style={styles.buttontext} >Submit</Text>
        </TouchableOpacity>

        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  container: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 5,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  input: {
    height: 80,
    backgroundColor: 'rgba(255,255,255, 0.8)',
    paddingLeft: 10,
    marginBottom: 15,
  },
  buttoncontainer: {
    backgroundColor: '#3690d2',
    paddingVertical: 15,
  },
  buttontext: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  pickercontainer: {
    backgroundColor: 'rgba(255,255,255, 0.8)',
    marginBottom: 15,
  },
  myLabel: {
    color: '#60a7db',
    marginBottom: 15,
  }
});
