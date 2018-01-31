import React, { Component } from 'react'

// Redux
import {connect} from 'react-redux'
import SampleActions from '../../Redux/SampleRedux'

// Themes
import styled from 'styled-components/native'

// Constants
const ScreenWrapper = styled.View`
    flex: 1
    background-color: #fff
    align-items: center
    justify-content: center
`

const LaunchScreenText = styled.Text`
    font-size: 14
    color: #000
    text-align: center
`

class LaunchScreen extends Component {

    componentWillMount () {
        // Calling the api here for test purpose
        // Check the logs in your console, as enabled by redux logger
        this.props.getSampleData()
    }

    render() {
        return (
            <ScreenWrapper>
                <LaunchScreenText>
                    This is your launch screen, modify the contents to see the details
                </LaunchScreenText>
            </ScreenWrapper>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSampleData: () => dispatch(SampleActions.sampleDataRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
