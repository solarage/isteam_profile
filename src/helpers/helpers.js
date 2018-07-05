export function validateInput(input) {
	input.value = input.value.replace(/[^0-9]/, "");
}

export function convertUnixToObjDate(unixDate) {
	let date = new Date(unixDate * 1000).toLocaleString().slice(0, 10);
	return date;
}


export function sortArray(array, fieldName, sortBy) {
	let sortedArray = [];

	function asc(a, b) {
		if(a[fieldName] < b[fieldName]) {
			return -1;
		}
		if(a[fieldName] > b[fieldName]) {
			return 1;
		}
		return 0; //может быть равно b
	}

	function desc(a, b) {
		if(a[fieldName] < b[fieldName]) {
			return 1;
		}
		if(a[fieldName] > b[fieldName]) {
			return -1;
		}
		return 0; //может быть равно b
	}

	if (sortBy === "desc") { 
		sortedArray = array.sort(desc); 
	} else {
		sortedArray = array.sort(asc);
	}

	return sortedArray;
}

export function getPlayerSummary(key, id) {

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
			return data;
		})
		.catch(function(error) {
			console.log('error', error)
		})
}

export function getSteamLevel(key, id) {

	const url = `https://api.steampowered.com/IPlayerService/GetSteamLevel/v1/?key=${key}&steamid=${id}&format=json`;

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
			return data;
		})
		.catch(function(error) {
			console.log('error', error)
		})
}



export function getOwnedGames(key, id) {

	const url = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${key}&steamid=${id}&format=json`;

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
			return data;
		})
		.catch(function(error) {
			console.log('error', error)
		})
}

