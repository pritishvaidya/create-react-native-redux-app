import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    sampleDataRequest: null,
    sampleDataSuccess: ['data'],
    sampleDataFailure: ['error'],
})

export const SampleTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    data: null,
    fetchingData: false,
    fetchedData: false,
    error: null
})

/* ------------- Reducers ------------- */
export const requestSampleData = (state) => {
   return state.merge({ fetchingData: true })
}

export const successSampleData = (state, {data}) => {
    return state.merge({ fetchingData: false, error: null, data, fetchedData: true })
}

export const failureSampleData = (state) =>
    state.merge({ fetchingData: false, error: true, data: null, fetchedData: false })



/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.SAMPLE_DATA_REQUEST]: requestSampleData,
    [Types.SAMPLE_DATA_SUCCESS]: successSampleData,
    [Types.SAMPLE_DATA_FAILURE]: failureSampleData
})
