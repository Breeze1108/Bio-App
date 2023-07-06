import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Image} from 'react-native';

export default function App() {
  return (
    <View 
      style= {styles.container}>
      <Image 
        style={{ width: 200, height: 200 }}
        source={{
        uri: 'https://steamuserimages-a.akamaihd.net/ugc/786371856221183225/2F04B32CA10AD1ADBC01CE5D4DC6F7AF0E96AE6C/?imw=512&imh=512&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'
      }}
      />
      <Text style={styles.title}>Fabrizio Bernal</Text>
      <Text style={styles.paragraph}>Im a 17 year old Highschool Student with big dreams for the tech world. I am Latino, play video games, love reading, watching anime, I wrestle, and do jiu jitsu. All of these things that I love to do in my spare time have instelled some of the most essential values of life like hardwork, dedication, and patience. However I strive to be better everyday. </Text>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: 'gray',

  },
title: {
  marginTop: 30,
  marginBottom: 20,
  paddingVertical: 8,
  paddingHorizontal:8,
  borderWidth: 8,
  borderColor: 'ghostwhite',
  backgroundColor: 'darkgray',
  fontSize: 50,
  textAlign: 'center',
},
paragraph: {
  color: '#faa023',
  fontSize: 20,
  fontWeight: 'bold',
  marginLeft: 20,
  marginRight: 20,
}
});
