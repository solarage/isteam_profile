import React from 'react';

import ProfileCard from '../ProfileCard/ProfileCard.jsx';


const ProfileCardList = ({ profilesState, queriesState, getGames }) => {
	return(
		profilesState.map(profileField => 
		<ProfileCard key={profileField.steamid} queriesState={queriesState} profileField={profileField} getGames={getGames}/>	
		)
	)
}

export default ProfileCardList;