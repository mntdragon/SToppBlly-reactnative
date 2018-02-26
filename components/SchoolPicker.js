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

const schoolList = [
    {
      label: 'School A',
      value: 'schoola',
    },
    {
      label: 'School B',
      value: 'schoolb',
    },
    {
      label: 'School C',
      value: 'schoolc',
    },
    {
      label: 'School D',
      value: 'schoold',
    },
    {
      label: 'School E',
      value: 'schoole',
    },
  ];

export default class SchoolPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
          school: '',
        };
      }
    render() {
        return (
            <Picker
           style={styles.pickercontainer}
            selectedValue={this.state.school}
            onValueChange={itemValue => this.setState({ school: itemValue })}>
            {schoolList.map((i, index) => (
              <Picker.Item key={index} label={i.label} value={i.value} />
            ))}
          </Picker>
        );
    }
}

const styles = StyleSheet.create({
    pickercontainer: {
      backgroundColor: 'rgba(255,255,255, 0.8)',
      marginBottom: 15,
    },
  });
