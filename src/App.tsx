import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackNavigator} from './navigations';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import Dialog from './components/Dialog';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStackNavigator />
        <Dialog />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
