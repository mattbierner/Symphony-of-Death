"use strict";
const React = require('react');
const ReactDOM = require('react-dom');

/**
 * Collapsible side panel containing a set of options.
 */
export default class OptionsPane extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            implicit: true
        };
    }
    
    onCollapseButtonClick() {
        this.setState({ active: !this.state.active, implicit: false });
    }
    
    render() {
        const classes = [];
        if (this.state.implicit)
            classes.push('implicit');
        if (this.state.active)
            classes.push('active');
        
        return (
            <div className={'side-panel ' + classes.join(' ')}>
                <button className="panel-collapse-button material-icons"
                    onClick={this.onCollapseButtonClick.bind(this)}>{this.state.active ? 'settings' : 'settings'}
                </button>
                <div className="panel-contents">
                    {this.props.children}
                </div>
            </div>);
    }
}; 
