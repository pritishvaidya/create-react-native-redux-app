    import { takeLatest, all } from 'redux-saga/effects'

/* ------------- Types ------------- */
import { SampleTypes } from '../Redux/SampleRedux'

/* ------------- Sagas ------------- */
import {sampleSaga} from './SampleSaga'


/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
    yield all([
       takeLatest(SampleTypes.SAMPLE_DATA_REQUEST, sampleSaga)
    ])
}
