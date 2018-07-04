import React from 'react';
import './ProfileGames.css';


const ProfileGames = () => {

	return(
		<div className="steam-profile-games" >
			<div className="profile-game-img">
				<img src="#" alt="game-img"/>
			</div>
			<div className="profile-game-name">Name</div>
			<div className="profile-game-id">***id****</div>
			<div className="profile-playtime">playtime</div>	
		</div>
	)
}

export default ProfileGames;