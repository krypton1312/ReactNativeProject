import { StatusBar } from 'expo-status-bar';
import reactDom from 'react-dom';
import { StyleSheet, Text, SafeAreaView, Button, Alert, Image, TouchableWithoutFeedback } from 'react-native';

export default function App() {
  const HandleTextPress = () => console.log('textpressed');
  const HandleButtonPress = () => Alert.alert("title", "main message", [
    {text: "ok"},
    {text: "cancel"},
  ]);
  const HandleButtonPress2 = () => Alert.prompt("title", "main message", text => console.log(text));

    return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text} onPress={HandleTextPress}>Hello</Text>
      <Button title ={'button1'}  onPress={HandleButtonPress}/>
      <Button title ={'button2'}  onPress={HandleButtonPress2}/>
      <TouchableWithoutFeedback onPress={HandleButtonPress}>
      <Image source={{
        height: 200,
        uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
      }}/>
      </TouchableWithoutFeedback>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: 
  { 
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
  },
  text:
  {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'red',
  },
});
