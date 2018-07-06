import { GET_GAMES_DATA } from '../actions/actions';

const initialState = localStorage.getItem('games') ? JSON.parse(localStorage.getItem('games')) : [];

const games = (state = initialState, action) => {
	switch(action.type) {
		case GET_GAMES_DATA :
			return [
				...state,
				{
					appid:  action.appid,
					playtime:  action.playtime,
					name: action.name,
					img: action.img
				}
			]
	}

	return state;
}

export default games;