import React from 'react';

import ProfileGames from '../ProfileGames/ProfileGames.jsx';


const ProfileGameList = ({ gamesState, sortedGamesState }) => {
	return(
		sortedGamesState.map(gameField => 
		<ProfileGames key={gameField.appid} gameField={gameField} />	
		)
	)
}

export default ProfileGameList;