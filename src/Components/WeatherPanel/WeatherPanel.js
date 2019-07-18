import React, { Component } from "react"
import WeatherItem from './WeatherItem'
import axios from 'axios'
import { connect } from 'react-redux'
import BlockTitle from '../Commons/BlockTitle'
import socketIOClient from "socket.io-client";


class WeatherPanel extends Component {
	constructor(props) {
    	super(props);
	}
	
	filterWeather = (weatherList, idSelected) => {
		/*console.log('filterWeather')
		console.log(weatherList)
		console.log(idSelected)*/
		let retorno = []
		for(var i=0;i<weatherList.length;i++){			
				if(idSelected===''||idSelected==='Todas las localidades '){
					retorno.push(weatherList[i]);					
				}else	
				if(weatherList[i].locName.toUpperCase().search(idSelected.toUpperCase())>-1){
					retorno.push(weatherList[i]);	
				}
		}
		return  retorno;
	}	
	render() {
		let weatherList = this.filterWeather(this.props.weatherList, this.props.idSelected);
		let lastTime = '';
		let printTime = false;
		return (
		  <div className="WeatherListContainer">	
		  	<BlockTitle title='Mediciones Clima'/>
		  		<div className="WeatherList">
			        {weatherList.map((weather, index) => {
			        	printTime = false
			        	if(lastTime!==weather.time){
			        		printTime = true
			        		lastTime = weather.time
			        	}
			            return (                    	
			                <WeatherItem  key={index} id={index}
			                locationWeather={weather}
			                printTime={printTime} 
			                />					                    		               
			            )
			        })}  	
		  		</div>
		  </div>
		);
	}
}

/*export default WeatherPanel*/

const mapStateToProps = (state) => {
	return {
		weatherList: state.storedWeatherData.weatherList,
        idSelected: state.storedWeatherData.idSelectedLocation
	}
}
export default connect(mapStateToProps)(WeatherPanel)