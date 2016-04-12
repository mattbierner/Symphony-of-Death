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
            value: props.value || '1'
        };
    }
    
    onChange(e) {
        const value = e.target.value;
        this.setState({ value: value });
        this.props.onChange(+value);
    }

    render() {
        return (
            <select style={{zIndex: 999}} className="speed-selector" onChange={this.onChange.bind(this)} value={this.state.value}>
                <option value="1">1x</option>
                <option value="2">2x</option>
                <option value="4">4x</option>
                <option value="8">8x</option>
                <option value="20">20x</option>
                <option value="custom">custom</option>
            </select>
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
                if (!self.state.playing)
                    return;

                const actual = Date.now() - _start;
                const next = Math.max(0, interval - (interval - actual));
                const progress = self.state.progress + self.state.playbackSpeed * (actual / self.state.duration);
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
                self.setState({ progress: Math.min(1, progress), head: head });
                if (progress >= 1) {

                } else {
                    loop(next);
                }
            }, when);
        } (interval));
    }

    onTimelineDrag(progress) {
        const offset = progress * this.state.duration;
        const head = this.props.stream.times.le(offset);
        this.setState({
            progress: progress,
            head: head
        });

        if (this.props.onPositionChange) {
            const before = [];
            const after = [];
            for (let i = head.clone(); i.valid; i.prev())
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
