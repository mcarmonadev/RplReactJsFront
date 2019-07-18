import { combineReducers } from 'redux'
import meassurmentsReducer from './meassurmentsReducer'

const rootReducer = combineReducers({
    storedWeatherData: meassurmentsReducer
});
export default rootReducer;