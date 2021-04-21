import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const CoinDetailScreen = ({ route }) => {
  useEffect(() => {
    console.log(route.params)
  }, [])
  return (
    <View>
      <Text>Coin Detail Screen</Text>
    </View>
  )
}

export default CoinDetailScreen;