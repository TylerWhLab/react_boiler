import { combineReducers } from 'redux'; // combineReducers : store에 속한 여러가지 reducer(기능별 state가 존재하므로)가 존재하는데 combineReducers를 이용해 rootReducer에서 하나로 합쳐줌
import user from './user_reducer';

const rootReducer = combineReducers({
    user
})

export default rootReducer;