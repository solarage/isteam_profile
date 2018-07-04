import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProfileCard.css';

import Button from '../Button/Button.jsx';


class ProfileCard extends React.Component {
	constructor(props) {
		super(props)

	}

	render() {

		const { profileField } = this.props;
		console.log('profileField', profileField);

		return(
			<div className="steam-profile-card" >
				<div className="steam-profile-header">
					<div className="steam-profile-id"><h3>STEAM ID</h3> {profileField.steamid}</div>
					<div className="steam-profile-level"><h3>Level</h3> {profileField.levelSteam}</div>
					<div className="steam-profile-status"><h3>status</h3> {profileField.status}</div>		
				</div>
				<div className="steam-profile-body">
					<div className="steam-profile-avatar">
						<img src={profileField.avatar} alt="avatar" />
					</div>
					<div className="steam-profile-name"><h3>Name</h3> {profileField.name}</div>	
				</div>
				<div className="steam-profile-footer">
					<div className="steam-profile-reg"><h3>Profile created</h3> {profileField.dateReg}</div>
					<div className="steam-profile-locale"><h3>Locale</h3> {profileField.locale}</div>
					<div className="steam-profile-address"><h3>Address</h3> {profileField.address}</div>		
				</div>
				<Link to="/games"><Button btnName="Games"/></Link>
			</div>
		)

	}
}

export default ProfileCard;