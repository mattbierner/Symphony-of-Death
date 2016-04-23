"use strict";
const React = require('react');
const ReactDOM = require('react-dom');

import OptionsPane from './options_pane';

import example_matches from '../../data/example_matches'

/**
 * Set of options for a match.
 */
export default class MatchOptions extends React.Component {
    constructor(props) {
        super(props);
    }
    
    onChange(e) {
        const matchId = e.target.value;
        this.props.onSelectedMatchChange(matchId);
    }
    
    render() {
        const options = example_matches.map(match =>
            <option key={match.id} value={match.id}>{match.name}</option>);
        
        return (
            <OptionsPane header="Match">
                Match: <select value={this.props.selectedMatch}
                    onChange={this.onChange.bind(this)}>{options}</select>
            </OptionsPane>);
    }
}; 
