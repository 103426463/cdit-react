import React from 'react';
import {StyleSheet, View} from 'react-native';

const flexView  = () => {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
      <View style={{flex: 77, backgroundColor: 'red'}} />
      <View style={{flex: 37, backgroundColor: 'white'}} />
      <View style={{flex: 17, backgroundColor: 'green'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default flexView;