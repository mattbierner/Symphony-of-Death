"use strict";

const React = require('react');
const ReactDOM = require('react-dom');
import {getWeaponsTable} from './weapons';

const DeathStream = require('./DeathStream');

const tryInvoke = (f, x) =>
    f ? f(x) : null;

const getWeaponName = weaponId => {
    const weapon = getWeaponsTable().get(weaponId);
    return weapon ? weapon.name : 'unknown';
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
            left: `${progress * 100}%`
        };
        const weaponName = this.props.event ? getWeaponName(this.props.event.KillerWeaponStockId) : 'unknown';

        return (
            <li className={`timeline-event weapon weapon-${weaponName}`}
                style={style}
                onMouseEnter={this.onMouseEnter.bind(this) }
                onMouseLeave={this.onMouseLeave.bind(this) } />);
    }
}

class TimelineScrubber extends React.Component {
    render() {
        return (
            <div className="scrubber"
                style={{ position: 'absolute', top: 0, left: (this.props.progress || 0) * 100 + '%' }} />);
    }
}

/**
 * 
 */
export default class Timeline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dragging: false
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

    onMouseDown(event) {
        if (this.state.dragging)
            return;
        this.setState({ dragging: true })
        this.setProgressFromMouseEvent(event);
    }
    
    onMouseUp(event) {
        this.setState({ dragging: false })
    }

    onMouseMove(e) {
        if (!this.state.dragging)
            return;
        this.setProgressFromMouseEvent(e);
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
    }
    
    setProgressFromMouseEvent(event) {
        const node = ReactDOM.findDOMNode(this);
        const rect = node.getBoundingClientRect();
        const progress = (event.pageX - rect.left) / rect.width;
        this.props.onDrag(progress);
    }

    render() {
        const events = [];
        if (this.props.stream) {
            this.props.stream.forEach(event => {
                events.push(<TimelineEvent key={event.Id}
                    event={event}
                    onFocus={this.onEventFocus.bind(this) }
                    onFocusEnd={this.onEventFocusEnd.bind(this) } />);
            });
        }
        return (
            <div id="timeline"
                onMouseDown={this.onMouseDown.bind(this) }
                onMouseUp={this.onMouseUp.bind(this) }
                onMouseMove={this.onMouseMove.bind(this) }>
                <ul className="timeline-events">{events}</ul>
                <TimelineScrubber progress={this.props.progress} />
            </div>);
    }
};

