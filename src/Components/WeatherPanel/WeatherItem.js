import React, { Component } from 'react'

class WeatherItem extends Component {
/*
	function formatDateTS(current_datetimeTS){
		let current_datetime = (new Date(current_datetimeTS*1000));
		
	}*/
	getFormattedDate(){
		let currDate = (new Date(this.props.locationWeather.time));

		// + MyDate.getDate()).slice(-2) 
		//return ( ('0'+currDate.getHours()).slice(-2)  + ":" + ('0'+currDate.getMinutes()).slice(-2) + ":" + ('0'+currDate.getSeconds()).slice(-2) );
		return (
				currDate.getFullYear() + "/" + 
				("0"+(currDate.getMonth() + 1) ).slice(-2)+ "/" + 
				("0"+currDate.getDate()).slice(-2)
				);
	}
	getFormattedTime(){
		let currDate = (new Date(this.props.locationWeather.time));

		// + MyDate.getDate()).slice(-2) 
		//return ( ('0'+currDate.getHours()).slice(-2)  + ":" + ('0'+currDate.getMinutes()).slice(-2) + ":" + ('0'+currDate.getSeconds()).slice(-2) );
		return (
				("0"+currDate.getHours()).slice(-2) + ":" + 
				("0"+currDate.getMinutes()).slice(-2) + ":" + 
				("0"+currDate.getSeconds()).slice(-2)
				);
	}
 
    render() {
        return(
        	  <div>          
	        	{(this.props.printTime)?
	                <div className="WeatherItem_Time">
		                <div className="WeatherItemLabel_Time">
		                	{this.getFormattedDate()}  &nbsp;  - &nbsp; {this.getFormattedTime()}
			        	</div>
		        	</div>
	        		:''
	        	}  
              <div className="WeatherItem">
                <div className="WeatherItemLabel">{this.props.locationWeather.locName} &nbsp; &nbsp; º {this.props.locationWeather.temperature}  
	        	</div>
              </div>
              </div>
        );
    }
}

export default WeatherItem