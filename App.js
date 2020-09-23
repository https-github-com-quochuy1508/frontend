import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/redux/store/configureStore';
import Screens from './src/screens';
import SplashScreen from 'react-native-splash-screen';

const App: () => React$Node = () => {
  useEffect(() => {
    SplashScreen.hide();
  },[]);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Screens />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
