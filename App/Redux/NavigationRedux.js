import AppNavigator from '../Navigation/AppNavigation'

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('LaunchScreen'))

export const reducer = (state = initialState, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state)
    return newState || state
}
