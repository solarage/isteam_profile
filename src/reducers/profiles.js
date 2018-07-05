import { GET_PROFILE_DATA } from '../actions/actions';

const initialState = [

];

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
	}

	return state;
}

export default profiles;