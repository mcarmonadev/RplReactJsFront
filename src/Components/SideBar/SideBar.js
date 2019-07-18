import React, { Component } from "react";
import BlockTitle   	from '../Commons/BlockTitle.js';
import LocalitiesList from './LocalitiesList';/*
import CountListHeaders from './CountListHeaders.js';*/

class SideBar extends Component {

	constructor(props) {
    	super(props);
	}
	render() {
		return (
		  <div className="SideContainer">	
		  	<BlockTitle title='Lista Localidades'/>
		  	<LocalitiesList/>
		  </div>
		);
	}
}

export default SideBar;