

import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Main from './src/Main/index'
import {Provider} from 'react-redux'
import store from 'src/redux/store'



const App = () => {
return (
    <NavigationContainer>
      <Provider store ={store}>
        <Main/>
      </Provider>
    </NavigationContainer>
  );
};
export default App;
