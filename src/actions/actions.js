export const GET_PROFILE_QUERY = 'GET_PROFILE_QUERY';
export const GET_PROFILE_DATA = 'GET_PROFILE_DATA';
export const GET_GAMES_DATA = 'GET_GAMES_DATA';
export const UPDATE_INPUT_FIELD = 'UPDATE_INPUT_FIELD';

import key from '../webApiKey'; 
// import { getPlayerSummary, getSteamLevel, getOwnedGames } from '../helpers/helpers';

export const getProfileData = (id) => {
	return (dispatch) => {
		dispatch({
			type: GET_PROFILE_QUERY
		})

		const url = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${key}&steamids=${id}`;

		let status = function(response) {
			if (response.status !== 200) {
				return Promise.reject(new Error(response.status.text))
			}
			console.log('response', response)
			return Promise.resolve(response)
		}

		let json = function(response) {
			return response.json()
		}

		fetch(url) 
			.then(status)
			.then(json)
			.then(function(data) {
				console.log('data', data);

				const dataObj = data.response.players[0];
				dispatch({
					type: GET_PROFILE_DATA,
					steamid:  dataObj.steamid,
					levelSteam:  dataObj.player_level,
					status:  dataObj.personastate,
					avatar:  dataObj.avatarfull,
					name:  dataObj.personaname,
					dateReg:  dataObj.timecreated,
					locale:  dataObj.loccountrycode,
					address:  dataObj.locstatecode
				})

			})
			.catch(function(error) {
				console.log('error', error)
			})
	}
}

export const getGamesData = (data) => {
	return {
		type: GET_GAMES_DATA,
		data
	}
}

export const updateInputField = (steamId) => {
	return {
		type: UPDATE_INPUT_FIELD,
		steamId
	}
}
