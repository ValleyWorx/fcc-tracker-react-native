import React from 'react';
import { Provider, connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers, SafeAreaView } from 'react-navigation';
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import { Routes } from './src/nav/Router';
import getStore from './src/state/Store';
import * as STYLES from './src/styles';
import { BackHandler } from 'react-native';

const AppNavigator = StackNavigator(Routes, {
  initialRouteName: 'LoginScreen',
  headerMode: 'screen',
  mode: 'card',
  navigationOptions: {
    gesturesEnabled: false,
  }
})

const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
}

// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);
const addListener = createReduxBoundAddListener("root");

@connect(state => ({
  nav: state.nav
}))
class AppWithNavigationState extends React.Component {
  handleBackPress = () => {
    const { dispatch, nav } = this.props;
    const navigation = addNavigationHelpers({
      dispatch,
      state: nav,
    })
    navigation.goBack();
    return true;
  }

  componentWillMount() {

  }

  componentDidMount() {
    BackHandler.addEventListener('backPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('backPress', this.handleBackPress);
  }
  
  render() {
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
          addListener,
        })}
      />
    )
  }
}

const store = getStore(navReducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1, backgroundColor: STYLES.MAIN_COLOR }}>
          <AppWithNavigationState />
        </SafeAreaView>
      </Provider>
    )
  }
}

export default App;