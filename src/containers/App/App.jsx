import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types'
import './App.css';
import logo from '../../steam1.png';

import SearchForm from '../SearchForm/SearchForm.jsx';
import ProfileCard from '../../components/ProfileCard/ProfileCard.jsx';
import ProfileGames from '../../components/ProfileGames/ProfileGames.jsx';
import ProfileCardList from '../../components/ProfileCardList/ProfileCardList.jsx';
import Preloader from '../../components/Preloader/Preloader.jsx';

import { getProfileData, getSteamLevel, getGamesData, updateInputField } from '../../actions/actions';

class App extends Component {
	constructor(props) {
		super(props)

	}

	render() {
		const { queriesState, profilesState, steamActions } = this.props;
		const preloader = queriesState.loading ? <Preloader />  :  "";
		const profile = profilesState.length ? <ProfileCardList profilesState={profilesState} queriesState={queriesState} getGames={this.getGames} /> : "";
		return(
    		<div className="wrapper">
				<h1>iSTEAM Profile</h1>
				<img src={logo} className="logo" alt="logo" />
				<h3>Info about Steam Profile</h3>
				<SearchForm getProfileInfo={this.handleSubmit} profilesState={profilesState} steamActions={steamActions}/>
				{preloader}
				{profile}	
    		</div>
		)
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.steamActions.getProfData(this.props.queriesState.steamId);
		this.props.steamActions.getSteamLvl(this.props.queriesState.steamId);
	}

	getGames = () => {
		this.props.steamActions.getGamesData(this.props.queriesState.steamId);
	}

}

const mapStateToProps = (state, ownProps) => {
	return {
		profilesState: state.profiles,
		gamesState: state.games,
		queriesState: state.queries,
		ownProps
	}
	
}

const saveActionsToProps = (dispatch) => {
	return {
		steamActions: {
			getProfData: bindActionCreators(getProfileData, dispatch),
			getSteamLvl: bindActionCreators(getSteamLevel, dispatch),
			getGamesData: bindActionCreators(getGamesData, dispatch),
			upInputField: bindActionCreators(updateInputField, dispatch)
		}
	}
}

export default connect(mapStateToProps, saveActionsToProps)(App);