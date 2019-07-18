import React, { Component } from "react";
class BlockTitle extends Component {
	constructor(props) {super(props);}
	render() {return (<div className="BlockTitle">{this.props.title}</div>);}
}

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

export default BlockTitle;