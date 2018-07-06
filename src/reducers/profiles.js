import { GET_PROFILE_DATA, REMOVE_DATA } from '../actions/actions';

const initialState = localStorage.getItem('profiles') ? JSON.parse(localStorage.getItem('profiles')) : [];

const profiles = (state = initialState, action) => {
	switch(action.type) {
		case GET_PROFILE_DATA :
			return [
				...state,
				{
					steamid: action.steamid,
					levelSteam: action.levelSteam,
					status: action.status,
					avatar: action.avatar,
					name: action.name,
					dateReg: action.dateReg,
					locale: action.locale,
					address: action.address
				}
			];
		case REMOVE_DATA :
			return [];
	}

	return state;
}

export default profiles;