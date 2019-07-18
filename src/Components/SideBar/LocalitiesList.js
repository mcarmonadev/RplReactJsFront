import React, { Component } from 'react'
import axios from 'axios'
import LocationItem   from './LocationItem.js';
import { connect } from 'react-redux'
import { loadLocalities, updateSelectedLocation } from '../../Actions/actionCreators'

class LocalitiesList extends Component {
	constructor(props) {
    	super(props);
	   /*this.state = {
	      localities:[]
	    };*/
	}

	getLocalities() {
		axios.get('/api/localities')
		.then(response => {
			this.props.dispatch(loadLocalities(response.data));			
    		//this.setState({localities:response.data})
			//console.log(response.data)
		})
		.catch(error => console.log(error))
	}
	updateSelectedLocation = (location) => {
	 	this.props.dispatch(updateSelectedLocation(location));
	}

	componentDidMount() {
		this.getLocalities();
	}
	render() {
		let localities = this.props.localitiesElements;
		return (
		  <div className="LocalitiesList">
			        {localities.map((location) => {
			            return (                    	
			                <LocationItem 
			                		location={location} key={location} id={location}                          		
									updateSelectedLocation={this.updateSelectedLocation}   
									/>
			            )
			        })}  		  
		  </div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		localitiesElements: state.storedWeatherData.localitiesElements/*,
		sortingSettings: state.storedCounters.headersSorting,
		filteringSettings: state.storedCounters.filterSettings*/
	}
}

export default connect(mapStateToProps)(LocalitiesList)