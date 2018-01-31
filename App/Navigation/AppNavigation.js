import {StackNavigator, NavigationActions } from 'react-navigation'

// Screens
import LaunchScreen from '../Containers/LaunchScreen'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
    LaunchScreen: {
        screen: LaunchScreen
    }
},{
    headerMode: 'modal'
})

const navigateOnce = (getStateForAction) => (action, state) => {
    const {type, routeName} = action
    return (
        state &&
        type === NavigationActions.NAVIGATE &&
        routeName === state.routes[state.routes.length - 1].routeName
    ) ? null : getStateForAction(action, state)
}

PrimaryNav.router.getStateForAction = navigateOnce(PrimaryNav.router.getStateForAction)

export default PrimaryNav