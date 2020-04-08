import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import AppContainer from './navigation/AppStack';
import reducers from './reducers/rootReducer';

//temp
import AuthLoading from './screens/auth/AuthLoading';

const middleWare = applyMiddleware(thunk);
const store = createStore(reducers, middleWare);

const App = () => {
  useEffect(() => {
    console.disableYellowBox = true;
  });

  return (
    <Provider store={store}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <AppContainer />
    </Provider>
  );
};

export default App;
