import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackNavigator} from './navigations';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
}

export default App;
