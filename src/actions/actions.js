export const GET_PROFILE_QUERY = 'GET_PROFILE_QUERY';
export const GET_PROFILE_DATA = 'GET_PROFILE_DATA';
export const GET_GAMES_DATA = 'GET_GAMES_DATA';
export const GET_STEAM_LEVEL = 'GET_STEAM_LEVEL';
export const UPDATE_INPUT_FIELD = 'UPDATE_INPUT_FIELD';
export const UPDATE_SORT_FIELDS = 'UPDATE_SORT_FIELDS';
export const REMOVE_DATA = 'REMOVE_DATA';

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
			return Promise.resolve(response)
		}

		let json = function(response) {
			return response.json()
		}

		fetch(url) 
			.then(status)
			.then(json)
			.then(function(data) {
	
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

export const getGamesData = (id) => {

	return (dispatch) => {
		dispatch({
			type: GET_PROFILE_QUERY
		})

		const url = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${key}&steamid=${id}&include_appinfo=1&format=json`;

		let status = function(response) {
			if (response.status !== 200) {
				return Promise.reject(new Error(response.status.text))
			}
			return Promise.resolve(response)
		}

		let json = function(response) {
			return response.json()
		}

		fetch(url) 
			.then(status)
			.then(json)
			.then(function(data) {

				const dataArray = data.response.games;

				for (var i=0; i < dataArray.length; i++) {
					dispatch({
						type: GET_GAMES_DATA,
						appid:  dataArray[i].appid,
						playtime:  dataArray[i].playtime_forever,
						name: dataArray[i].name,
						img: dataArray[i].img_icon_url
					})
				}

			})
			.catch(function(error) {
				console.log('error', error)
			})
	}

}


export const getSteamLevel = (id) => {

	return (dispatch) => {

		const url = `https://api.steampowered.com/IPlayerService/GetSteamLevel/v1/?key=${key}&steamid=${id}&format=json`;

		let status = function(response) {
			if (response.status !== 200) {
				return Promise.reject(new Error(response.status.text))
			}
			return Promise.resolve(response)
		}

		let json = function(response) {
			return response.json()
		}

		fetch(url) 
			.then(status)
			.then(json)
			.then(function(data) {

				const dataObj = data.response;

				dispatch({
					type: GET_STEAM_LEVEL,
					levelSteam: dataObj.player_level
				})

			})
			.catch(function(error) {
				console.log('error', error)
			})
	}
}


export const updateInputField = (steamId) => {
	return {
		type: UPDATE_INPUT_FIELD,
		steamId
	}
}

export const updateSortFields = (sortBy) => {
	return {
		type: UPDATE_SORT_FIELDS,
		sortBy
	}
}

export const removeData = () => {
	return {
		type: REMOVE_DATA
	}
}
