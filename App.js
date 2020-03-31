import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {SafeAreaView, View, Text, StatusBar} from 'react-native';

import reducers from './reducers/rootReducer';

const middleWare = applyMiddleware(thunk);
const store = createStore(reducers, middleWare);

const App = () => {
  useEffect(() => {
    console.disableYellowBox = true;
  });

  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}>
          <Text>Keupn!</Text>
        </View>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
