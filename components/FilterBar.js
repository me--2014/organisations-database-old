import React, { Component } from 'react'

export default class OrganisationList extends Component {

	render() {
		return(
			<div>
				<label for="filterInput">Filter the list:</label>
				<select id="filterInput"></select>
			</div>
		);
	}
}