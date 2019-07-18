import React, { Component } from 'react'
import store from '../../store'
import { connect } from 'react-redux'

class LocationItem extends Component {

	constructor(props) {
    	super(props);
	    this.state = {
	      localities:[]
	    };
	}
    selectThisLocation = (location) => {
        this.props.updateSelectedLocation(location)
    }    	

    render() {
        const location = this.props.location;
        let fileClasses = ["LocationItem"];if(this.props.idSelected===this.props.location)fileClasses.push('LocationItem_selected');
        return(            
              <div className={fileClasses.join(' ')}   onClick={(e) => this.selectThisLocation(location)} >
                <div className="LocationItemLabel">{this.props.location.capitalize()} 
	        	</div>
              </div>
        );
    }
}	

const mapStateToProps = (state) => {
    return {
        idSelected: (state.storedWeatherData.idSelectedLocation)
    }
}

export default connect(mapStateToProps)(LocationItem)