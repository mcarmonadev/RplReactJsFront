import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";
import './Css/Weather.css';
import { Provider } from 'react-redux';
import  store  from './store';
import rootReducer from './Reducers/rootReducer';
import WeatherApp from './Components/WeatherApp.js';

const node = document.getElementById("root");
render(
		<Provider store={store}>
			<WeatherApp /> 
		</Provider>
		, node
	   );
