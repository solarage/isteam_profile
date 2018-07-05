import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SearchForm.css';

import { validateInput } from '../../helpers/helpers';


class SearchForm extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			inputValue: ''
		}
	}

	handleChange = (event) => {
		validateInput(event.target);
		this.setState({
			inputValue: event.target.value
		});
		let steamId = event.target.value;
		this.props.dispatch(this.props.steamActions.upInputField(steamId));
	}

	render() {	
		const { getProfileInfo, profilesState } = this.props;
		let btnClassName = "search-btn";
		this.state.inputValue ? btnClassName += " search-btn-enabled" : "";
		let inputClassName = "search-input";
		profilesState.length ? inputClassName += " hidden" : "";
		profilesState.length ? btnClassName += " hidden" : "";

		return(

			<div className="steam-search-profile" >
				<form onSubmit={getProfileInfo}>
					<input className={inputClassName} placeholder="Steam ID" type="text" onInput={this.handleChange} disabled={profilesState.length}></input>
					<button className={btnClassName} type="submit" disabled={!this.state.inputValue || profilesState.length >= 1} >GET DATA</button>
				</form>
			</div>
		)

	}


}

export default connect()(SearchForm);