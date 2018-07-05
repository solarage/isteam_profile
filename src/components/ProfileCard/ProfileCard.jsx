import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProfileCard.css';

import Button from '../Button/Button.jsx';

import { convertUnixToObjDate } from '../../helpers/helpers';

class ProfileCard extends React.Component {
	constructor(props) {
		super(props)

	}

	render() {

		const { queriesState, profileField, getGames } = this.props;
		const pointerStyle = {
			display: "block",
			margin: 5,
			width: 15, 
			height: 15, 
			borderRadius: 50, 
			background: profileField.status === 1 ? "green" : "red"
		};

		return(
			<div className="steam-profile-card" >
				<div className="steam-profile-header">
					<div className="steam-profile-id"><h3>STEAM ID</h3> {profileField.steamid}</div>
					<div className="steam-profile-level"><h3>Level</h3> {queriesState.levelSteam}</div>
					<div className="steam-profile-status"><h3>Status</h3><span className="pointer" style={pointerStyle}></span></div>		
				</div>
				<div className="steam-profile-body">
					<div className="steam-profile-avatar">
						<img src={profileField.avatar} alt="avatar" />
					</div>
					<div className="steam-profile-name"><h3>Name</h3> {profileField.name}</div>	
				</div>
				<div className="steam-profile-footer">
					<div className="steam-profile-reg"><h3>Profile created</h3> {convertUnixToObjDate(profileField.dateReg)}</div>
					<div className="steam-profile-locale"><h3>Locale</h3> {profileField.locale}</div>
					<div className="steam-profile-address"><h3>Address</h3> {profileField.address}</div>		
				</div>
				<Link to="/games"><Button btnName="Games" handleClick={getGames} /></Link>
			</div>
		)

	}
}

export default ProfileCard;