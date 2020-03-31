import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={{justifyContent: "center", alignItems: "center", height: "100%"}}>
          <Text>Keupn!</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
