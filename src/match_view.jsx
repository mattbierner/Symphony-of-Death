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
        this._3dview.highlightEvent(event);
    }

    componentDidMount() {
        if (this._3dview)
            return;
        
        const element = ReactDOM.findDOMNode(this);
        const canvas = element.getElementsByClassName('glCanvas')[0];
        this._3dview = new Match3dView(canvas, element, this);
    }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.stream !== this.props.stream) {
            this.setState({ shownEvents: new Set(nextProps.shownEvents || []) });
            nextProps.stream.forEach(event => this._3dview.addEvent(event, true));
            this._3dview.setBounds(nextProps.stream.bounds);
            return;
        }
        const next = new Set(nextProps.shownEvents);
        const added = Array.from(next).filter(x => !this.state.shownEvents.has(x));
        const removed = Array.from(this.state.shownEvents).filter(x => !next.has(x));
        
        added.forEach(e => this._3dview.showEvent(e));
        removed.forEach(e => this._3dview.hideEvent(e));
        
        this.setState({ shownEvents: next });
        
        this._3dview.render();
    }
    
    onEventActivate(event, activation) {
        this.props.onEventActivate(event, activation);
    }

    render() {
        return (
            <div className="match-view">
                <canvas className={"glCanvas"}></canvas>
                <ViewControls
                    onFrontViewSelected={() => this._3dview.goToFrontView()}
                    onSideViewSelected={() => this._3dview.goToSideView()}
                    onTopViewSelected={() => this._3dview.goToTopView()}/>
            </div>);
    }
};

