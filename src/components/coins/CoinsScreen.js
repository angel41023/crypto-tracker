import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

class CoinsScreen extends Component {
  handlePress = () => {
    console.log('ir a detalle', this.props)
    this.props.navigation.navigate('CoinDetail')
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Coins Screen</Text>
        <Pressable onPress={this.handlePress} style={styles.btn}>
          <Text style={styles.text}>Ir al detalle</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 5
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  btn: {
    padding: 8,
    backgroundColor: '#a348ab',
    marginTop: 15
  },
  text: {
    color: '#fff',
    textAlign: 'center'
  }
  
})

export default CoinsScreen;