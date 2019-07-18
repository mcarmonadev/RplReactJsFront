import { LOAD_LOCALITIES, SELECT_LOCATION, LOAD_SOCKET_RESPONSE } from '../Actions/actionTypes'

const initialState = {
  localitiesElements: [],
  idSelectedLocation: 'Todas las localidades ',
  weatherList: [],
  apiErrorsList: []
};


function meassurmentsReducer(state =  initialState, action) 
{
    switch(action.type) {
        case LOAD_LOCALITIES:
            return {  ...state,
                      localitiesElements: ['Todas las localidades ',...action.localities]
                    };
        case SELECT_LOCATION:
            return {  ...state,
                      //idSelectedLocation: (action.idSelectedLocation==='Todas las localidades ')?'':action.idSelectedLocation
                      idSelectedLocation: action.idSelectedLocation
                    };

        case LOAD_SOCKET_RESPONSE:
          //alert('meassurmentsReducer LOAD_SOCKET_RESPONSE')
          /*console.log('meassurmentsReducer LOAD_SOCKET_RESPONSE')
          console.log(action.socketResopnse)*/
        //this.setState({weatherList:this.state.weatherList.concat(data.weatherResponse)})
            return {  ...state,
                      weatherList: state.weatherList.concat(action.socketResopnse.weatherResponse),
                      apiErrorsList: state.apiErrorsList.concat(action.socketResopnse.apiErrors)
                    };                    
        default:
            return state;    
    }
}
export default meassurmentsReducer

