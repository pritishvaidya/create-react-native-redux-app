import {call, put} from 'redux-saga/effects'
import {path} from 'ramda'
import SampleActions from '../Redux/SampleRedux'
import SampleApi from '../Services/api'

/* Define the api here */
const api = SampleApi.sample()

export function * sampleSaga (action) {
    const { sampleDataSuccess } = action
    const response = yield call(api.getSample, sampleDataSuccess)
    if (response.ok) {
        const sampleResponse = path(['data'], response)
        yield put(SampleActions.sampleDataSuccess(sampleResponse))
    } else {
        yield put(SampleActions.sampleDataFailure())
    }
}