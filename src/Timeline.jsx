"use strict";

const React = require('react');
const ReactDOM = require('react-dom');
import {getWeaponsTable} from './weapons';

const DeathStream = require('./DeathStream');

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

class TimelineScrubber extends React.Component {
    render() {
        return (
            <div className="scrubber"
                style={{ position: 'absolute', top: 0, left: (this.props.progress || 0) * 100 + '%'}} />);
    }
}

/**
 * 
 */
export default class Timeline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 0
        };
    }

    onEventFocus(event) {
        this.setState({ focusedEvent: event });
        tryInvoke(this.props.onEventFocus, event);
    }
    
    onEventFocusEnd(event) {
        this.setState({ focusedEvent: null });
        tryInvoke(this.props.onEventFocusEnd, event);
    }
     
    render() {
        const events = [];
        if (this.props.stream) {
            this.props.stream.forEach(event => {
                events.push(<TimelineEvent key={event.Id}
                    event={event}
                    onFocus={this.onEventFocus.bind(this)}
                    onFocusEnd={this.onEventFocusEnd.bind(this)} />);
            });
        }
        return (
            <div id="timeline">
                <ul className="timeline-events">{events}</ul>
                <TimelineScrubber progress={this.props.progress} />
            </div>);
    }
}; 

