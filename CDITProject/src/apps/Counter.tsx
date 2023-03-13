import React, {useState} from 'react';

import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';
// reserach react native: "state":
//state
//props // later
const Counter: React.FC = () => {

  // setValues here: #using useState
  const [value, setValue] = useState(0);
  if (value == -1){
    setValue(0) 
  }
  if (value == 16){
    setValue(15) 
  }

  
  return (
    <View id = "container"
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
        
        ]}>
        <View style={{flex: 99, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center'}} >
            <Text id = "numDisplay"
             style={[styles.setFontSize,styles.setColorBlack]}>
               {value}               
               </Text>
        

        </View>

        <View style={{        
        flex: 19, backgroundColor: 'lightpink', flexDirection: 'row',
        }}      
        >
            <View style = {{ flex: 33 }}   
            >
            <Button
                
                title="plus"
                onPress={() => setValue(value + 1)}
                accessibilityLabel="accessibilityLabel button"
            />
            </View>

            <View style = {{ flex: 33 }}>
            <Button
                
                title="minus"
                onPress={() => setValue(value - 1)}          
              />
            </View>

            <View style = {{ flex: 33 }}>
            <Button
                
                title="reset"
                onPress={() => setValue(0)}               
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
    padding: 20,
  },

  setFontSize: {
    fontSize: 60,
    fontWeight : 'bold' ,
    textAlign: 'center'

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
  setColorBlack :{
    color: 'black'
  },
  setColorGreen :{
    color: 'green'
  }

});

export default Counter;


