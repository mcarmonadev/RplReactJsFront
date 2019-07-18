import React, { Component } from 'react'

class ErrorItem extends Component { 
    render() {
        return(
              <div className="WeatherItem">
                <div className="WeatherItemLabel">&nbsp; {this.props.errorDesc} &nbsp; &nbsp;
	        	</div>
              </div>
        );
    }
}

export default ErrorItem