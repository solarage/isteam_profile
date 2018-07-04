import { UPDATE_INPUT_FIELD } from '../actions/actions';
import { GET_PROFILE_DATA } from '../actions/actions';
import { GET_PROFILE_QUERY } from '../actions/actions';
import { GET_GAMES_DATA } from '../actions/actions';
 

const initialState = {
	steamId: "",
	loading: false
};

const queries = (state = initialState, action) => {
	switch(action.type) {
		case UPDATE_INPUT_FIELD :
			return {
				...state, steamId: action.steamId
			};
		case GET_PROFILE_QUERY :
			return {
				...state, loading: true
			};
		case GET_PROFILE_DATA :
			return {
				...state, loading: false
			};
		case GET_GAMES_DATA :
			return {
				...state, loading: false
			};
	}

	return state;
}

export default queries;