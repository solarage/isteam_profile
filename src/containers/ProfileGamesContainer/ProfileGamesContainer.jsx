import React, { Container } from 'react';
import { connect } from 'react-redux';

import './ProfileGamesContainer.css';

import ProfileGamesList from '../../components/ProfileGamesList/ProfileGamesList.jsx';
import Preloader from '../../components/Preloader/Preloader.jsx';
import { updateSortFields } from '../../actions/actions';

import { sortArray } from '../../helpers/helpers';

class ProfileGamesContainer extends React.Component {
	constructor(props) {
		super(props)

		let sortBy = "desc";
	}

	render() {
		const { queriesState, gamesState, sortedGamesState } = this.props;
		const preloader = queriesState.loading ? <Preloader /> :  "";
		return(
			<div>
				<div className="steam-profile-games-titles" >
					<div className="profile-game-img-title"></div>
					<div className="profile-game-name-title">Name</div>
					<div className="profile-game-id-title">App ID</div>
					<div className="profile-playtime-title" onClick={this.handleSort}>Play time</div>
				</div>
				<ProfileGamesList gamesState={gamesState} sortedGamesState={sortedGamesState} />
				{preloader}
			</div>
		)
	}

	handleSort = (event) => {
		if (this.sortBy === "asc") { 
			this.sortBy = "desc"
		} else {
			this.sortBy = "asc"
		};

		this.props.dispatch(updateSortFields(this.sortBy));
	}
}

const mapStateToProps = (state) => {
	return {
		gamesState: state.games,
		queriesState: state.queries,
		sortFields: state.sortFields,
		sortedGamesState: sortArray(state.games, "playtime", state.sortFields.sortBy)
	}
	
}

export default connect(mapStateToProps)(ProfileGamesContainer);