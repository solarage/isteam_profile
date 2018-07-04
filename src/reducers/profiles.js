import { GET_PROFILE_DATA } from '../actions/actions';

const initialState = [
	// {
	// 	steamid: 45645676,
	// 	levelSteam: 100,
	// 	status: 1,
	// 	avatar: null,
	// 	name: 'Rassell',
	// 	dateReg: '05.05.2005',
	// 	locale: 'US',
	// 	address: 'LA'
	// }
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
			]
	}

	return state;
}

export default profiles;