"use strict";

const React = require('react');
const ReactDOM = require('react-dom');

import Match3dView from './match_3d_view';
import ViewControls from './view_controls'

/**
 * Displays a match.
 */
export default class MatchView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shownEvents: new Set(props.shownEvents || [])
        };
    }

    onEventFocus(event) {
        this.viewer.highlightEvent(event);
    }

    componentDidMount() {
        if (!this.viewer) {
            this.viewer = new Match3dView(document.getElementById('glcanvas'));
            this.props.onGetView && this.props.onGetView(this.viewer);
        }
    }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.stream !== this.props.stream) {
            this.setState({ shownEvents: new Set(nextProps.shownEvents || []) });
            nextProps.stream.forEach(event => this.viewer.addEvent(event, true));
            return;
        }
        const next = new Set(nextProps.shownEvents);
        const added = Array.from(next).filter(x => !this.state.shownEvents.has(x));
        const removed = Array.from(this.state.shownEvents).filter(x => !next.has(x));
        
        added.forEach(e => this.viewer.showEvent(e));
        removed.forEach(e => this.viewer.hideEvent(e));
        
        this.setState({ shownEvents: next });
        
        this.viewer.render();
    }

    render() {
        return (
            <div>
                <canvas id="glcanvas" className={"glCanvas"}></canvas>
                <ViewControls
                    onFrontViewSelected={() => this.viewer.goToFrontView()}
                    onSideViewSelected={() => this.viewer.goToSideView()}
                    onTopViewSelected={() => this.viewer.goToTopView()}/>
            </div>);
    }
};

