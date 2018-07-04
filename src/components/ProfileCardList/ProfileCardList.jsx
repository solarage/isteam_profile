import React from 'react';
import { Link } from 'react-router-dom';

import ProfileCard from '../ProfileCard/ProfileCard.jsx';


const ProfileCardList = ({ profilesState }) => {
	console.log('profilesState', profilesState);
	return(
		profilesState.map(profileField => 
		<ProfileCard key={profileField.steamid} profileField={profileField} />	
		)
	)
}

export default ProfileCardList;