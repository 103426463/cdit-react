
import React, {
  Component, 
  useState
} from 'react';



import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';
// put this outside the class.
// screen data reader. 

export default class App extends Component {  

    state = {  
        num: 0,
        color : 'black'
        
      }  
    
    plusState = () => this.setState({num: this.state.num += 1})  
    minusState = ()  => this.setState({num: this.state.num -= 1})  
    resetState = () => this.setState({num: 0})  
    
    render() {  

      // conditionals here, before return()
      // min value
      if(this.state.num == -1){
          this.state.num = 0
          
      }
      // max value 
      if(this.state.num == 16){
        this.state.num = 15
      
      if ( this.state.num > 4 && this.state.num < 10){
        // style: change color blue
        this.state.color = "blue"
        }
      if ( this.state.num > 10 && this.state.num < 14){
        // style: change color green
        this.state.color = "green"

        
      }
      // change style
        
    }

        return (  
          <View id='container'
          style={[
            styles.container,
            {
              flexDirection: 'column',
            },
            
            ]}>

            <View style={{flex: 99, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center'}} >
              <Text id = "numDisplay"
                    style={[styles.text, {
                      color : this.state.color
                    }
                      // if med is true then text color change
                    // not yet done
                    ]}>
                  {this.state.num}               
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
                    onPress={() => this.plusState()  } 
                    

                    accessibilityLabel="accessibilityLabel button"
                />
                </View>

                <View style = {{ flex: 33 }}>
                <Button
                    
                    title="minus"
                    onPress={() => this.minusState()}          
                  />
                </View>

                <View style = {{ flex: 33 }}>
                <Button
                    
                    title="reset"
                    onPress={() => this.resetState()}               
                  />  
                </View>
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
  // text styles
  text: {
    color: 'black',
    fontSize: 60,
    fontWeight : 'bold' ,
    textAlign: 'center'
},
  textMed: {
    color: '#e91e63',
},
  textHigh: {
    color: 'green',
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
    color: 'green',
    
  }

});