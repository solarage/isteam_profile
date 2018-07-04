import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types'
import './App.css';

import SearchForm from '../SearchForm/SearchForm.jsx';
import ProfileCard from '../../components/ProfileCard/ProfileCard.jsx';
import ProfileGames from '../../components/ProfileGames/ProfileGames.jsx';
import ProfileCardList from '../../components/ProfileCardList/ProfileCardList.jsx';

import { getProfileData, updateInputField } from '../../actions/actions';

class App extends Component {
	constructor(props) {
		super(props)

	}

	render() {
		const { queriesState, profilesState, steamActions } = this.props;
		const preloader = queriesState.loading ? <p>ЗАГРУЗКА...</p>  :  "";
		const profile = profilesState.length ? <ProfileCardList profilesState={profilesState}/> : "";
		return(
    		<div className="wrapper">
				<h1>iSTEAM Profile</h1>
				<h3>Info about Steam Profile</h3>
				<SearchForm getProfileInfo={this.handleSubmit} profilesState={profilesState} steamActions={steamActions}/>
				{preloader}
				{profile}	
    		</div>
		)
	}

	handleSubmit = (event) => {
		event.preventDefault();
		console.log('GET DATA>>');
		this.props.steamActions.getData(this.props.queriesState.steamId);

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
			getData: bindActionCreators(getProfileData, dispatch),
			upInputField: bindActionCreators(updateInputField, dispatch)
		}
	}
}

export default connect(mapStateToProps, saveActionsToProps)(App);