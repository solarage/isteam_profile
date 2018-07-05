import { combineReducers } from 'redux';

import profiles from './profiles';
import games from './games';
import queries from './queries';
import sortFields from './sortfields';

export default combineReducers({
	profiles,
	games,
	queries,
	sortFields
})