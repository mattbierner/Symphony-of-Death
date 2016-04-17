"use strict";

const React = require('react');
const ReactDOM = require('react-dom');

const DeathStream = require('./DeathStream');

import Controls from './controls';
import MatchView from './match_view.jsx'


import {getWeaponsTable} from './weapons';

import SoundManager from './audio/sound_manager';
import Sine from './audio/sound_generators/sine';
import WeirdMaleScreams from './audio/sound_generators/weird_male_screams'
import Theremin from './audio/sound_generators/theremin'

const matchId = "5b27a620-cebf-40a3-b09c-a37f15fd135f"

/**
 * 
 */
class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            matchId: props.matchId,
            shownEvents: new Set()
        };
        
        this._soundManager = new SoundManager([
            Sine
        ]);
    }
    
    componentDidMount() {
        DeathStream.loadForMatch(this.state.matchId)
            .then(({stream, events}) => {
                this.setState({ stream: stream });
            })
            .catch(x => console.error(x))
        
        this._soundManager.playAmbient('../sounds/spaceambient.wav');
    }
    
    onEventFocus(event) {
       // this.viewer.highlightEvent(event);
    }
    
    onEventActivate(event, data) {
        this._soundManager.play(event, data);
    }
    
    onTimelineEvent(event) {
        this.setState({ shownEvents: new Set(this.state.shownEvents).add(event) });
        this._soundManager.play(event);
    }
    
    onPositionChange(before, after) {
        this.setState({ shownEvents: new Set(before) });
        this._soundManager.stopAll();
    }
    
    onPlay() {
    }
    
    onPause() {
        this._soundManager.stopAll();
    }
    
    render() {
        return (
            <div className={'container'}>
                <MatchView
                    stream={this.state.stream}
                    shownEvents={this.state.shownEvents}
                    onEventActivate={this.onEventActivate.bind(this)} />
                <Controls stream={this.state.stream}
                    onEventFocus={this.onEventFocus.bind(this)}
                    onTimelineEvent={this.onTimelineEvent.bind(this)}
                    onPositionChange={this.onPositionChange.bind(this)}
                    onPlay={this.onPlay.bind(this)}
                    onPause={this.onPause.bind(this)}/>
            </div>);
    }
}; 

ReactDOM.render(
    <Application matchId={matchId} />,
    document.getElementById('content'));