import React, { Component } from "react";
import SideBar   from './SideBar/SideBar.js';
import WeatherPanel   from './WeatherPanel/WeatherPanel.js';
import ErrorsPanel   from './ErrorsPanel/ErrorsPanel.js';
import { connect } from 'react-redux'
import { loadSocketResopnse } from '../Actions/actionCreators'

import socketIOClient from "socket.io-client";

class WeatherApp extends Component {
	constructor(props) {
    	super(props);
	    this.state = {
	      //weatherList:  [],
	      endpoint: window.location//"http://localhost:8000"
	    };
	}
	componentDidMount() {
		const socketWeatherA = socketIOClient();
		socketWeatherA.on("WeatherAPI", 
			data =>{ 
				console.log("Llego via socket")
				//console.log(data)
				//console.log(data.weatherResponse)
				this.props.dispatch(loadSocketResopnse(data));		
				//this.setState({weatherList:this.state.weatherList.concat(data.weatherResponse)})
			}
		);
	}		
	render() {
		return (  
		  <div className="MainContainer">     
		    <SideBar/>    
		    <WeatherPanel/>    
		    <ErrorsPanel/>   
		  </div>
		);
	}

}
  

const mapStateToProps = (state) => {
	return {
		/*weatherList: state.storedWeatherData.weatherList,
		sortingSettings: state.storedCounters.headersSorting,
		filteringSettings: state.storedCounters.filterSettings*/
	}
}

export default connect(mapStateToProps)(WeatherApp)