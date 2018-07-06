import React, { Container } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import './ProfileGamesContainer.css';

import ProfileGamesList from '../../components/ProfileGamesList/ProfileGamesList.jsx';
import Button from '../../components/Button/Button.jsx';
import Preloader from '../../components/Preloader/Preloader.jsx';
import { updateSortFields } from '../../actions/actions';

import { sortArray } from '../../helpers/helpers';

class ProfileGamesContainer extends React.Component {
	constructor(props) {
		super(props)

	}

	render() {
		const { queriesState, gamesState, sortedGamesState } = this.props;
		const preloader = queriesState.loading ? <Preloader /> :  "";
		return(
			<div>
				<div className="steam-profile-games-titles" >
					<div className="profile-game-img-title"><Link to="/"><Button btnName="Back" /></Link></div>
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
		if (this.props.sortFields.sortBy === "asc") { 
			this.props.upSortFields("desc")
		} else {
			this.props.upSortFields("asc") 
		};
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

const saveActionsToProps = (dispatch) => {
  return {
      upSortFields: bindActionCreators(updateSortFields, dispatch)
  }
}

export default connect(mapStateToProps, saveActionsToProps)(ProfileGamesContainer);