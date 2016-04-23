"use strict";
const React = require('react');
const ReactDOM = require('react-dom');

import moment from 'moment';

import {getWeaponsTable} from '../data/weapons';

/**
 * 
 */
class Weapon extends React.Component {
    render() {
        const event = this.props.event;
        const weapon = getWeaponsTable().get(event.KillerWeaponStockId);
        let displayName = '';
        if (event.IsMelee) {
            displayName = weapon ? weapon.displayName : '';
        } else if (weapon && weapon.Type === 'Gernade') {
            displayName = weapon ? weapon.displayName : '';
        } else {
            const distance = event.KillVector.length().toFixed(2);
            displayName = weapon ? `${weapon.displayName} (${distance})` : '';
        }
        return (<span className="weaponName">{displayName}</span>);
    }
}

/**
 * Event in the event list
 */
class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeString: moment(props.event.TimeSinceStart._data).format('mm:ss.SS')
        };
    }
    
    componentDidMount() {
        const element = ReactDOM.findDOMNode(this);
        element.addEventListener('animationend', () => this.removeSelf(), false);
        // handle case where animation does not play due to parent being hidden.
        setTimeout(() => this.removeSelf(), 2000);
    }
    
    removeSelf() {
        this.props.onFadeOut(this.props.index, this.props.event);
    }
    
    render() {
        const event = this.props.event;
        return (
            <li className="event"><span className="time">{this.state.timeString}</span> -
                <span className="player killer">{event.Killer && event.Killer.Gamertag}</span> | <Weapon  event={event} />  | <span className="player victim">{event.Victim && event.Victim.Gamertag}</span>
            </li>);
    }
}

/**
 * Displays a list of events.
 */
export default class EventList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { events: new Map() };
        this._i = 0;
    }
    
    onEvent(event) {
        const i = this._i++;
        this.state.events.set(i, {data: event, i: i });
        this.forceUpdate();
    }
    
    componentDidMount() {
        this.props.registerOnEvent((e) => {
            this.onEvent(e);
        });
    }
    
    onFadeOut(key, event) {
        this.state.events.delete(key);
        this.forceUpdate();
    }
    
    render() {
        const onFadeOut = this.onFadeOut.bind(this);
        
        const events = [];
        for (let [_, {data, i}] of this.state.events)
            events.push(<Event key={i} event={data} index={i} onFadeOut={onFadeOut} />);
        
        return (
            <ul className="event-list">{events}</ul>);
    }
}
