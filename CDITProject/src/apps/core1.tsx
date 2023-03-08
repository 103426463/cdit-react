import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

const Core1  = () => {
  return (
    <View id = "container"
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
        
        ]}>
        <View style={{flex: 99, backgroundColor: 'lightblue'}} >
            <Text id = "numDisplay"   > 0 </Text>
        </View>

        <View style={{        
        flex: 19, backgroundColor: 'lightpink', flexDirection: 'row',
        }} 
      
      >
            <View style = {{ flex: 33 }}
            >
            <Button
                
                title="plus"
                onPress={() => Alert.alert(' pressed')}
                accessibilityLabel="accessibilityLabel button"
            />
            </View>
            <View style = {{ flex: 33 }}>
            <Button
                
                title="minus"
                onPress={() => Alert.alert('A uld be used by the screen reader')}                
              />
            </View>

            <View style = {{ flex: 33 }}>
            <Button
                
                title="reset"
                onPress={() => Alert.alert('A uld be used by the screen reader')}                
              />  
            </View>
        </View>
      
      
      
      
      
      <View style={{flex: 9, backgroundColor: 'white'}} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    setFontSize: {
      fontSize: 20,
      fontWeight : 'bold' 
    },
    setColorRed : {
      color: '#f44336'
    },
    setColorPink :{
      color: '#e91e63'
    },
    setColorPurple :{
      color: '#9c27b0'
    },
    setColorBlue :{
      color: '#2196f3'
    },
  });

export default Core1;