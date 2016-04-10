"use strict";

const React = require('react');
const ReactDOM = require('react-dom');

const DeathStream = require('./DeathStream');

const tryInvoke = (f, x) =>
    f ? f(x) : null;

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
        return (
            <li className="timeline-event"
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
        this.state = {};
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
            </div>);
    }
}; 

