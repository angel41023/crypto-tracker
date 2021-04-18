import React, { useEffect } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Http from '../../libs/http';

const CoinsScreen = (props) => {
  useEffect(async () => {
    const coins = await Http.instance.get('https://api.coinlore.net/api/tickers/');
    console.log(coins)
  }, [])

  handlePress = () => {
    props.navigation.navigate('CoinDetail')
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Coins Screen</Text>
      <Pressable onPress={handlePress} style={styles.btn}>
        <Text style={styles.text}>Ir al detalle</Text>
      </Pressable>
    </View>
  );
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