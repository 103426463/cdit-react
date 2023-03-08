import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

const Separator = () => <View style={styles.separator} />;

// const App1 = () => (
 class App1 extends React.Component{
    render(){
        return(
            <SafeAreaView style={styles.container}>
            <View style = {{backgroundColor : 'red'}}>
            <Button
                title="Press me"
                onPress={() => Alert.alert('Simple Button pressed')}
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              />
              <Button
                title="Press me"
                onPress={() => Alert.alert('Simple Button pressed')}
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              />
            </View>
            <Separator />
            <View>
            <Button
                title="Press me"
                onPress={() => Alert.alert('Simple Button pressed')}
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              />
              <Button
                title="Press me"
                color="#f194ff"
                onPress={() => Alert.alert('Button with adjusted color pressed')}
              />
            </View>
            <Separator />
            <View>
            <Button
                title="Press me"
                onPress={() => Alert.alert('Simple Button pressed')}
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              />
              <Button
                title="Press me"
                disabled
                onPress={() => Alert.alert('Cannot press this one')}
              />
            </View>
            <Separator />
            <View>
            <Button
                title="Press me"
                onPress={() => Alert.alert('Simple Button pressed')}
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              />
              <View style={styles.fixToText}>
                <Button
                  title="Left button"
                  onPress={() => Alert.alert('Left button pressed')}
                  color="#841584"
                accessibilityLabel="Learn more about this purple button"
                />
                <Button
                  title="Right button"
                  onPress={() => Alert.alert('Right button pressed')}
                  color="#841584"
                accessibilityLabel="Learn more about this purple button"
                />
              </View>
            </View>
          </SafeAreaView>
        )
    }
 }
// );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App1;