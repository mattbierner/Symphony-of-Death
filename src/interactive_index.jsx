"use strict";

const React = require('react');
const ReactDOM = require('react-dom');

const DeathStream = require('./DeathStream');

import Controls from './controls';
import MatchView from './match_view';
import EventList from './event_list';

import SoundManager from './audio/sound_manager';
import Sine from './audio/sound_generators/sine';
import WeirdMaleScreams from './audio/sound_generators/weird_male_screams';
import Theremin from './audio/sound_generators/theremin';


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
        
        this._soundManager.playAmbient('../sounds/spaceambient.mp3');
    }
    
    onEventActivate(event, data) {
        this._soundManager.play(event, Object.assign({}, data, { stream: this.state.stream }));
        this._eventCallback(event);
    }
    
    render() {
        return (
            <div className={'container'}>
                <EventList registerOnEvent={(f) => { this._eventCallback = f; } } />
                <MatchView
                    stream={this.state.stream}
                    shownEvents={this.state.shownEvents}
                    onEventActivate={this.onEventActivate.bind(this)} />
                <a href="/" className="page-logo" />
            </div>);
    }
}; 

ReactDOM.render(
    <Application matchId={matchId} />,
    document.getElementById('content'));