"use strict";

const React = require('react');
const ReactDOM = require('react-dom');

import Timeline from './timeline';

const interval = 30;
const SCALE = 20;

const tryInvoke = (f, x) =>
    f ? f(x) : null;

/**
 * 
 */
export default class Controls extends React.Component {
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
    
    play() {
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
        return (
            <div id="controls">
                <div id="playback-controls">
                    <div className="button-group">
                        <button onClick={this.play.bind(this)}>Play</button>
                    </div>
                </div>
                <Timeline {...this.props} stream={this.props.stream} progress={this.state.progress} />
            </div>);
    }
}; 
