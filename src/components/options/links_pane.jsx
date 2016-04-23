"use strict";
const React = require('react');
const ReactDOM = require('react-dom');

import OptionsPane from './options_pane';

/**
 * Links options pane.
 */
export default class MatchOptions extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <OptionsPane header="Links" className='options-links'>
                <a href="https://github.com/mattbierner/Symphony-of-Death/blob/gh-pages/documentation/help.md">Help</a>
                <a href="https://github.com/mattbierner/Symphony-of-Death/issues">Report an Issue</a>
                <a href="https://github.com/mattbierner/Symphony-of-Death">Source</a>
                <a href="https://github.com/mattbierner/Symphony-of-Death/blob/gh-pages/documentation/credits.md">Credits</a>
            </OptionsPane>);
    }
}; 
