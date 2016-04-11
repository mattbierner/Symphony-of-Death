"use strict";

const React = require('react');
const ReactDOM = require('react-dom');
import {getWeaponsTable} from './weapons';

const DeathStream = require('./DeathStream');

const interval = 30;

const SCALE = 20;

const tryInvoke = (f, x) =>
    f ? f(x) : null;

const getWeaponName = weaponId => {
    const weapon = getWeaponsTable().get(weaponId);
    if (weapon)
        return weapon.name.replace(/\s/g, '-').toLowerCase();
    return 'unknown'
};

/**
 * Single event on the timeline.
 */
class TimelineEvent extends React.Component {
    onMouseEnter(event) {
        tryInvoke(this.props.onFocus, this.props.event);
    }
    
    onMouseLeave(event) {
        tryInvoke(this.props.onFocusEnd, this.props.event);
    }
    
    render() {
        const progress = this.props.event ? this.props.event.MatchProgress : 0;
        const style = {
            left: `${progress* 100}%`
        };
        const weaponName = this.props.event ? getWeaponName(this.props.event.KillerWeaponStockId) : 'unknown';
        
        return (
            <li className={`timeline-event weapon-${weaponName}`} 
                style={style}
                onMouseEnter={this.onMouseEnter.bind(this)}
                onMouseLeave={this.onMouseLeave.bind(this)} />);
    }
}


/**
 * 
 */
export default class Timeline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 0,
            duration: 0,
            playing: false
        };
    }
    
    componentWillReceiveProps(props) {
        if (props.stream) {
            this.setState({
                duration: props.stream.duration || 0,
                head: props.stream.times && props.stream.times.begin
            });
        }
    }
    
    onEventFocus(event) {
        this.setState({ focusedEvent: event });
        tryInvoke(this.props.onEventFocus, event);
    }
    
    onEventFocusEnd(event) {
        this.setState({ focusedEvent: null });
        tryInvoke(this.props.onEventFocusEnd, event);
    }
    
    onPlay() {
        if (this.state.playing)
            return;
        this.setState({ playing: true });
        
        const self = this;
        (function loop(when) {
            var _start = Date.now();
            setTimeout(() => {
                const actual = Date.now() - _start;
                const next = Math.max(0, interval - (actual - interval));
                const progress =  self.state.progress + SCALE * (actual / self.state.duration);
                const offset = progress * self.state.duration;
                let head = self.state.head;
                while (head && head.valid && head.key < offset) {
                    tryInvoke(self.props.onTimelineEvent, head.value);
                    if (head.hasNext) {
                        head.next();
                    } else {
                        head = null;
                        break;
                    }
                }
                self.setState({ progress: progress, head: head });
                if (progress >= 1) {
                    
                } else {
                    loop(next);
                }
            }, when);
        }(interval));
    }
    
    render() {
        const events = [];
        if (this.props.stream) {
            this.props.stream.forEach((key, value) => {
                events.push(<TimelineEvent key={key}
                    event={value}
                    onFocus={this.onEventFocus.bind(this)}
                    onFocusEnd={this.onEventFocusEnd.bind(this)} />);
            });
        }
        const focusedEvent = this.state.focusedEvent ? this.state.focusedEvent.KillerWeaponStockId : '';
        return (
            <div id="timeline">
                <ul className="timeline-events">{events}</ul>
                <div>{focusedEvent}</div>
                <div style={{ position: 'absolute', top: 0, left: this.state.progress * 100 + '%'}}>|</div>
                <button onClick={this.onPlay.bind(this)}>Play</button>
            </div>);
    }
}; 

