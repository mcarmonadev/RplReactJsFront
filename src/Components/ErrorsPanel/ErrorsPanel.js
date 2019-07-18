import React, { Component } from "react"
import ErrorItem from './ErrorItem'
import axios from 'axios'
import { connect } from 'react-redux'
import BlockTitle from '../Commons/BlockTitle'
import socketIOClient from "socket.io-client";


class ErrorsPanel extends Component {
	constructor(props) {
    	super(props);
	}
	render() {
		let apiErrors = this.props.apiErrorsList;
		let lastTime = '';
		let printTime = false;
		return (
		  <div className="ErrorsListContainer">	
		  	<BlockTitle title='Lista de Errores'/>
		  		<div className="WeatherList">
			        {apiErrors.map((apiError, index) => {
			        	let errorDesc = '';let errorTime = '';
			        	for (var key in apiError) {
						   errorTime = key;
						   errorDesc = key + ': ' + apiError[key];
						}
			            return (                    	
			                <ErrorItem  key={index} id={index}
			                errorDesc={errorDesc} errorTime={errorTime}/>					                    		               
			            )
			        })}  	
		  		</div>
		  </div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		apiErrorsList: state.storedWeatherData.apiErrorsList,
        idSelected: state.storedWeatherData.idSelectedLocation
	}
}
export default connect(mapStateToProps)(ErrorsPanel)