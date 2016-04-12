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
class PlaybackSpeedControls extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            speed: +props.value,
            value: props.value || '1',
            customValue: '1',
            custom: false
        };
    }
    
    onChange(e) {
        const value = e.target.value;
        if (value === 'custom') {
            if (+this.state.value)
                this.props.onChange(+value);
            
            this.setState({ value: 'custom', custom: true });
            this.setValue(this.state.customValue);
        } else {
            this.setState({ value: value, custom: false, customValue: value });
            this.setValue(value);
        }
    }
    
    onCustomChange(e) {
        const value = e.target.value;
        this.setValue(value);
        this.setState({ customValue: value });
    }
    
    setValue(value) {
        const num = +value;
        if (isNaN(num)) {
            //this.
            return false;
        }
        if (num <= 0 || num > 20) {
            return false;
        }
        this.setState({ speed: num });
        this.props.onChange(+num);
        return true;
    }

    render() {
        return (
            <span className="control">
            Speed:
            <select style={{zIndex: 999}} className="speed-selector" onChange={this.onChange.bind(this)} value={this.state.value}>
                <option value="1">1x</option>
                <option value="2">2x</option>
                <option value="4">4x</option>
                <option value="8">8x</option>
                <option value="20">20x</option>
                <option value="custom">custom</option>
            </select>
            <input type="text" className={this.state.custom ? '' : 'hidden'}
                value={this.state.customValue}
                onChange={this.onCustomChange.bind(this)} />
            </span>
        );
    }
}

/**
 * 
 */
export default class Controls extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 0,
            duration: 0,
            playing: false,
            playbackSpeed: 1
        };
    }

    componentWillReceiveProps(newProps) {
        if (newProps.stream !== this.props.stream) {
            this.setState({
                duration: newProps.stream.duration || 0,
                head: newProps.stream.times && newProps.stream.times.begin
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
                if (!self.state.playing)
                    return;

                const actual = Date.now() - _start;
                const next = Math.max(0, interval - (actual - interval));
                const progress = self.state.progress + self.state.playbackSpeed * (actual / self.state.duration);
                const offset = progress * self.state.duration;
                let head = self.state.head && self.state.head.clone();
                while (head && head.valid && head.key < offset) {
                    tryInvoke(self.props.onTimelineEvent, head.value);
                    if (head.hasNext) {
                        head.next();
                    } else {
                        head = null;
                        break;
                    }
                }
                self.setState({ progress: Math.max(0, Math.min(1, progress)), head: head });
                if (progress >= 1) {
                    this.setState({ playing: false });
                } else {
                    loop(next);
                }
            }, when);
        } (interval));
    }

    onTimelineDrag(progress) {
        const offset = progress * this.state.duration;
        const head = this.props.stream.times.ge(offset);
        this.setState({
            progress: progress,
            head: head
        });

        if (this.props.onPositionChange) {
            const before = [];
            const after = [];
            let i = head.clone();
            i.prev();
            for (; i.valid; i.prev())
                before.push(i.value);
            for (let i = head.clone(); i.valid; i.next())
                after.push(i.value);

            this.props.onPositionChange(before, after)
        }
    }

    stop() {
        this.setState({ playing: false });
    }

    onPlaybackSpeedChange(speed) {
        this.setState({ playbackSpeed: speed });
    }

    render() {
        return (
            <div id="controls">
                <div id="playback-controls">
                    <div className="button-group">
                        <button onClick={this.play.bind(this)}>Play</button>
                        <button onClick={this.stop.bind(this)}>Stop</button>
                    </div>
                    <PlaybackSpeedControls onChange={this.onPlaybackSpeedChange.bind(this)} />
                </div>
                <Timeline {...this.props}
                    stream={this.props.stream}
                    progress={this.state.progress}
                    onDrag={this.onTimelineDrag.bind(this) }/>
            </div>);
    }
}; 
