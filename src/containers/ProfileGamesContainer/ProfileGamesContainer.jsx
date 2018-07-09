import React, { Container } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import './ProfileGamesContainer.css';

import ProfileGamesList from '../../components/ProfileGamesList/ProfileGamesList.jsx';
import Button from '../../components/Button/Button.jsx';
import Preloader from '../../components/Preloader/Preloader.jsx';
import Pagination from '../../components/Pagination/Pagination.jsx';

import { updateSortFields } from '../../actions/actions';

import { sortArray } from '../../helpers/helpers';

class ProfileGamesContainer extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			currentPage: 0,
			count: this.props.sortedGamesState.length,
			offset: 20
		}

	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.gamesState.length !== this.props.count) {
			this.setState({
				count: nextProps.gamesState.length
			})
		}
	}

	render() {
		const { queriesState, gamesState, sortedGamesState } = this.props;
		const preloader = queriesState.loading ? <Preloader /> :  "";

		const { offset, currentPage, count } = this.state;
		const start = currentPage * offset;
		const end = (+currentPage + 1) * offset;

		const pagination = queriesState.loading ? "" : <Pagination pages={Math.ceil(count / offset)} current={currentPage} onChangePage={this.changePage}/>;
		return(
			<div>
				<div className="steam-profile-games-titles" >
					<div className="profile-game-img-title"><Link to="/"><Button btnName="Back" /></Link></div>
					<div className="profile-game-name-title" onClick={this.handleSortNames}>Name</div>
					<div className="profile-game-id-title">App ID</div>
					<div className="profile-playtime-title" onClick={this.handleSortPlaytimes}>Play time</div>
				</div>
				<ProfileGamesList gamesState={gamesState} sortedGamesState={sortedGamesState} start={start} end={end}/>
				{preloader}
				{pagination}
			</div>
		)
	}

	changePage = n => {
		this.setState({
			currentPage: +n
		});
	};

	handleSortPlaytimes = () => {
		if (this.props.sortFields.sortBy === "asc") { 
			this.props.upSortFields("playtime", "desc")
		} else {
			this.props.upSortFields("playtime", "asc") 
		};
	}

	handleSortNames = () => {
		if (this.props.sortFields.sortBy === "asc") { 
			this.props.upSortFields("name", "desc")
		} else {
			this.props.upSortFields("name", "asc") 
		};
	}
}

const mapStateToProps = (state) => {
	return {
		gamesState: state.games,
		queriesState: state.queries,
		sortFields: state.sortFields,
		sortedGamesState: sortArray(state.games, state.sortFields.sortField, state.sortFields.sortBy)
	}
	
}

const saveActionsToProps = (dispatch) => {
  return {
      upSortFields: bindActionCreators(updateSortFields, dispatch)
  }
}

export default connect(mapStateToProps, saveActionsToProps)(ProfileGamesContainer);