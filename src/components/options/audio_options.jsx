"use strict";
const React = require('react');
const ReactDOM = require('react-dom');

import OptionsPane from './options_pane';

/**
 * Top level types of instruments
 */
const types = [
    { name: 'Oscillator', value: 'oscillator' },
    { name: 'Midi', value: 'midi' }
];

const oscillatorTypes = ['sine', 'square', 'triangle', 'sawtooth'];

/**
 * Set of options for a match.
 */
export default class AudioOptions extends React.Component {
    constructor(props) {
        super(props);
    }
    
    getSubtypes(type) {
        return type === 'oscillator'
            ?oscillatorTypes
        :type === 'midi'
            ?require('soundfont-player/instruments.json')
        :[];
    }
    
    onTypeChange(e) {
        const type = e.target.value;
        if (type !== this.props.selectedAudioType) {
            this.props.onSelectedAudioTypeChange(type, this.getSubtypes(type)[0]);
        }
    }
    
    onSubTypeChange(e) {
        const subType = e.target.value;
        this.props.onSelectedAudioTypeChange(this.props.selectedAudioType, subType);
    }
    
    render() {
        const typeOptions = types.map(type =>
            <option key={type.value} value={type.value}>{type.name}</option>);
        
        const subSelect = this.getSubtypes(this.props.selectedAudioType).map(x =>
            <option key={x} value={x}>{x}</option>);
        
        return (
            <OptionsPane header="Instrument">
                <div>
                    <select value={this.props.selectedAudioType}
                        onChange={this.onTypeChange.bind(this)}>{typeOptions}</select>
                </div>
                <div>
                    <select value={this.props.selectedAudioSubType}
                        onChange={this.onSubTypeChange.bind(this)}>{subSelect}</select>
                </div>
            </OptionsPane>);
    }
}; 
