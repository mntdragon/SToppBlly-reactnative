import React from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    KeyboardAvoidingView,
    StyleSheet,
} from 'react-native';
import MyForm from './MyForm';

export default class Header extends React.Component {
  render() {
    return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logocontainer}>
        <Image style={styles.logo} source={require('./images/logo.png')}
         />

         <Text style={styles.title}>Stop Bullying</Text>
        </View>
        <View style={styles.myform}>
          <MyForm />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282830',
    width: Dimensions.get('window').width, // get the device window
  },
  logocontainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  title: {
    color: '#fff',
    marginTop: 10,
  },
  myform: {
    flex: 1,
  },
});
