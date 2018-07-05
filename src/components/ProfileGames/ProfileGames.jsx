import React from 'react';
import './ProfileGames.css';


const ProfileGames = ({ gameField }) => {

	return(
		<div className="steam-profile-games" >
			<div className="profile-game-img">
				<img src={`http://media.steampowered.com/steamcommunity/public/images/apps/${gameField.appid}/${gameField.img}.jpg`} alt="game-img"/>
			</div>
			<div className="profile-game-name">{gameField.name}</div>
			<div className="profile-game-id">{gameField.appid}</div>
			<div className="profile-playtime">{gameField.playtime}</div>	
		</div>
	)
}

export default ProfileGames;