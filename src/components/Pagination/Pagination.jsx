import React, { Component } from 'react';

import './Pagination.css';

class Pagination extends React.Component {

	onChangePage = e => {
		const id = e.target.dataset.page;
		this.props.onChangePage(id);
	};

  	render() {
		const { pages, current } = this.props;
		const prev = current !== 0 ? current - 1 : current;
		const next = current !== pages - 1 ? current + 1 : current;
		let arr = [];

		for (let i = 0; i < pages; i++) {
			if (i == 0) {
				arr.push(
					<li
						data-page={i}
						onClick={this.onChangePage}
						key={i - 1}
						className={"item" + (i == current ? " active" : "")}
					>
						{i + 1}
					</li>
				);
			}
			if ( i >= current - 2 && i !== 0 && 
				 i <= current + 2 && i != pages - 1) {
				arr.push(
					<li
						data-page={i}
						onClick={this.onChangePage}
						key={i}
						className={"item" + (i == current ? " active" : "")}
					>
						{i + 1}
					</li>
				);
			}
			if ( i == current - 3 && i !== 0 ||
				 i == current + 3 && i != pages - 1) {
				arr.push(
				<li
					data-page={i}
					key={i}
				>
					...
				</li>
				);
			}
			if (i == pages - 1) {
				arr.push(
					<li
						data-page={i}
						onClick={this.onChangePage}
						key={i}
						className={"item" + (i == current ? " active" : "")}
					>
						{i + 1}
					</li>
				);
			}
		}
		
		arr.unshift(
			<li
				data-page= {prev}
				onClick={this.onChangePage}
				key={9090}
				className={"item"}
			>
				&lt;
			</li>
		);

		arr.push(
			<li
				data-page= {next}
				onClick={this.onChangePage}
				key={90190}
				className={"item"}
			>
				&gt;
			</li>
		)
		
		return (
			<ul className="pagi">{arr}</ul>
		)
	}
}

export default Pagination;