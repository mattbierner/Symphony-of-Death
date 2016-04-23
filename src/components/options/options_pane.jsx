"use strict";
const React = require('react');
const ReactDOM = require('react-dom');

/**
 * Set of options
 */
export default class Options extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className={"options-pane " + (this.props.className || '')}>
                <h2 className="">{this.props.header}</h2>
                {this.props.children}
            </div>);
    }
}; 
