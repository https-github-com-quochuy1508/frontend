import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/redux/store/configureStore';
import Tabs from './src/screens';
import FullPostTool from './src/screens/App/HomeTab/FullPostTool';
import SignupStack from './src/screens/Auth/Signup/index'
import {navigationRef} from './rootNavigation';
import SplashScreen from 'react-native-splash-screen';
import { createStackNavigator} from '@react-navigation/stack';

const rootStack = createStackNavigator();

const App: () => React$Node = () => {
  useEffect(() => {
    SplashScreen.hide();
  },[]);
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <rootStack.Navigator screenOptions={{headerShown: false}}>
          <rootStack.Screen name="Signup" component={SignupStack}/>
          <rootStack.Screen name="Tabs" component={Tabs}/>
          <rootStack.Screen name="FullPostTool" component={FullPostTool}/>
        </rootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
