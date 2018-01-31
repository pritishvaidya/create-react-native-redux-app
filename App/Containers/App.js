import React, {Component} from 'react';
import { View, StatusBar } from 'react-native';

// Redux
import { Provider } from 'react-redux'
import configureStore from '../Redux/configureStore'
import ReduxNavigation from '../Navigation/ReduxNavigation'

// Persist
import { PersistGate } from 'redux-persist/es/integration/react'

const {store, persistor} = configureStore()

class RootContainer extends Component {
    render () {
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
              <StatusBar translucent barStyle='dark-content' backgroundColor='#fff' />
              <ReduxNavigation/>
            </View>
        )
    }
}


export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <RootContainer/>
            </PersistGate>
        </Provider>
    );
  }
}