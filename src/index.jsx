"use strict";

const React = require('react');
const ReactDOM = require('react-dom');

const DeathStream = require('./DeathStream');
import {Viewer} from './viewer';
import Timeline from './timeline';
const Wad = require('imports?this=>window!web-audio-daw');

const matchId = "5b27a620-cebf-40a3-b09c-a37f15fd135f"

/**
 * 
 */
class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = { matchId: props.matchId };
    }
    
    componentDidMount() {
        DeathStream.loadForMatch(this.state.matchId)
            .then(({stream, events}) => {
                this.setState({ stream: stream });
                try {
                    this.viewer = new Viewer('glcanvas');
                    stream.forEach((key, event) => this.viewer.addEvent(event, true));
                } catch (e) {
                    debugger;
                }
            })
            .catch(x => console.error(x))
    }
    
    onEventFocus(event) {
        this.viewer.highlightEvent(event);
    }
    
    onTimelineEvent(event) {
        this.viewer.showEvent(event);
        const pitch = event.KillVectorLength;
        const min = 27.5000;
        const max = 4186.01;
       
        let progress = 1000 + (pitch - 4.0) * 500;
        let p0 = Math.min(max, Math.max(min, progress));
        const bell = new Wad({source : 'sawtooth', pitch: p0})
        bell.play()
    }
    
    render() {
        return (
            <div className={'container'}>
                <canvas id="glcanvas" className={"glCanvas"}></canvas>
                <Timeline stream={this.state.stream}
                    onEventFocus={this.onEventFocus.bind(this)}
                    onTimelineEvent={this.onTimelineEvent.bind(this)}/>
            </div>);
    }
}; 

ReactDOM.render(
    <Application matchId={matchId} />,
    document.getElementById('content'));