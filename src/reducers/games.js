import { GET_GAMES_DATA } from '../actions/actions';

const initialState = [
	{
		steamid: null,
		game_count: null,
		appid: null,
		playtime_forever: null,
		name: null,
		img: null
	},
	{
		steamid: null,
		game_count: null,
		appid: null,
		playtime_forever: null,
		name: null,
		img: null
	}
];

const games = (state = initialState, action) => {
	switch(action.type) {
		case GET_GAMES_DATA :
			return [
				...state,
				{
					data: action.data
				}
			]
	}

	return state;
}

export default games;