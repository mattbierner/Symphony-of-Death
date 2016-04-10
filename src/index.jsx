"use strict";

const React = require('react');
const ReactDOM = require('react-dom');

const DeathStream = require('./DeathStream');
import {Viewer} from './viewer';
import Timeline from './timeline';

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
                    stream.forEach((key, event) => this.viewer.addEvent(event));
                } catch (e) {
                    debugger;
                }
            })
            .catch(x => console.error(x))
    }
    
    onEventFocus(event) {
        this.viewer.highlightEvent(event);
    }
    
    render() {
        return (
            <div>
                <canvas id="glcanvas" className={"glCanvas"}></canvas>
                <Timeline stream={this.state.stream}
                    onEventFocus={this.onEventFocus.bind(this)}/>
            </div>);
    }
}; 

ReactDOM.render(
    <Application matchId={matchId} />,
    document.getElementById('content'));