"use strict";
const React = require('react');
const ReactDOM = require('react-dom');

import OptionsPane from './options_pane';

/**
 * Set of options for a match.
 */
export default class MatchOptions extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <OptionsPane header="Match">
                
            </OptionsPane>);
    }
}; 
