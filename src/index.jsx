"use strict";

const React = require('react');
const ReactDOM = require('react-dom');

const DeathStream = require('./DeathStream');

import Controls from './controls';
import MatchView from './match_view.jsx'

import {getWeaponsTable} from './weapons';
const Wad = require('imports?this=>window!web-audio-daw');

import sounds from './sound_pack/weird_male_screams';

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
    }
    
    componentDidMount() {
        DeathStream.loadForMatch(this.state.matchId)
            .then(({stream, events}) => {
                this.setState({ stream: stream });
            })
            .catch(x => console.error(x))
    }
    
    onEventFocus(event) {
       // this.viewer.highlightEvent(event);
    }
    
    onTimelineEvent(event) {
        this.setState({ shownEvents: new Set(this.state.shownEvents).add(event) })
        const length = event.KillVectorLength;
        const min = 100;
        const max = 1200;
       
        let progress = 300 + -(length - 3.0) * 100;
        let p0 = Math.min(max, Math.max(min, progress));
        const bell = new Wad({source : 'sine', pitch: p0, env: { attack: 1, hold: 5, release: 2 } })
        
        const weapon = getWeaponsTable().get(event.KillerWeaponStockId);
      //  if (weapon) {
        //    const sound = sounds(weapon.name);
          //  if (sound)
                //new Wad({ source: sound }).play({ pitch: p0 })
                bell.play();
              //  setTimeout(() => bell.stop, 20000);
       // }
        //bell.play()
    }
    
    onPositionChange(before, after) {
        this.setState({ shownEvents: new Set(before) });
    }
    
    render() {
        return (
            <div className={'container'}>
                <MatchView
                    stream={this.state.stream}
                    shownEvents={this.state.shownEvents} />
                <Controls stream={this.state.stream}
                    onEventFocus={this.onEventFocus.bind(this)}
                    onTimelineEvent={this.onTimelineEvent.bind(this)}
                    onPositionChange={this.onPositionChange.bind(this)}/>
            </div>);
    }
}; 

ReactDOM.render(
    <Application matchId={matchId} />,
    document.getElementById('content'));