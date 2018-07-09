import React from 'react';

import ProfileGames from '../ProfileGames/ProfileGames.jsx';


const ProfileGameList = ({ gamesState, sortedGamesState, start, end }) => {	

	return(
		sortedGamesState.slice(start,end).map(gameField => 
		<ProfileGames key={gameField.appid} gameField={gameField} />	
		)
	)
}

export default ProfileGameList;