import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import Colors from '../../res/colors';
import CoinsItem from './CoinsItem';
import Http from '../../libs/http';

const CoinsScreen = (props) => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
    const res = await Http.instance.get('https://api.coinlore.net/api/tickers/');
    setCoins(res.data);
    setLoading(false);
  }, [])

  handlePress = () => {
    props.navigation.navigate('CoinDetail')
  }

  return(
    <View style={styles.container}>
      { loading ?
          <ActivityIndicator
            color='#f00'
            size='large'
            style={styles.loader}
          />
        : null
      }
      <FlatList
        data={coins}
        renderItem={({ item }) => <CoinsItem item={item} /> }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charade,
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
  },
  loader: {
    marginTop: 60
  }
  
})

export default CoinsScreen;