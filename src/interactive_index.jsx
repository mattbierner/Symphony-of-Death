"use strict";
const React = require('react');
const ReactDOM = require('react-dom');

const DeathStream = require('./DeathStream');

import MatchView from './components/match_view';
import EventList from './components/event_list';
import OptionsPanel from './components/options_panel';
import MatchOptions from './components/options/match_options';

import * as audioCtx from './audio/audio_context';
import SoundManager from './audio/sound_manager';
import Sine from './audio/sound_generators/sine';

import example_matches from './example_matches';

const matchId = "5b27a620-cebf-40a3-b09c-a37f15fd135f"

const onIos = () =>
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

/**
 * Options panel for interative.
 */
class InteractiveOptions extends React.Component {
    render() {
        return (
            <OptionsPanel>
                <MatchOptions {...this.props} />
            </OptionsPanel>
        );
    }
}

/**
 * 
 */
class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            match: null,
            shownEvents: new Set(),
            stream: null
        };
        
        this._soundManager = new SoundManager([
            Sine
        ]);
    }
    
    componentDidMount() {
        example_matches[0].then(match => {
                const shown = new Set();
                match.stream.forEach(x => shown.add(x));
                this.setState({ stream: match.stream, shownEvents: shown });
            })
            .catch(x => console.error(x))
        
        if (!onIos())
            audioCtx.init();
        
        this._soundManager.playAmbient('./sounds/spaceambient.mp3');
    }
    
    onTouchStart() {
        // must be created inside of a touch event
        if (onIos())
            audioCtx.init();
    }
    
    onEventActivate(event, data) {
        this._soundManager.play(event, Object.assign({}, data, { stream: this.state.stream }));
        this._eventCallback(event);
    }
    
    render() {
        return (
            <div className='full-container' onTouchStart={this.onTouchStart.bind(this)}>
                <InteractiveOptions />
                <div className="main-view">
                    <div className='full-container'>
                        <EventList registerOnEvent={(f) => { this._eventCallback = f; } } />
                        <MatchView
                            stream={this.state.stream}
                            shownEvents={this.state.shownEvents}
                            onEventActivate={this.onEventActivate.bind(this)} />
                        <a href="/" className="page-logo" />
                    </div>
                </div>
            </div>);
    }
}; 

ReactDOM.render(
    <Application matchId={matchId} />,
    document.getElementById('content'));