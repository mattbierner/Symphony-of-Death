"use strict";
const React = require('react');
const ReactDOM = require('react-dom');

/**
 * Side panel for a set of options
 */
export default class OptionsPane extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            implicit: true
        };
    }
    
    render() {
        return (
            <div className="side-panel">
                <button className="panel-collapse-button material-icons">{this.state.active ? 'settings' : 'settings'}</button>
                {this.props.children}
            </div>);
    }
}; 
