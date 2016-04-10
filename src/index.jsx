"use strict";

const example = require('./data/example.json');
const DeathStream = require('./DeathStream');
const weapons = require('./weapons');

const React = require('react');
const ReactDOM = require('react-dom');

import {Viewer} from './viewer';

const matchId = "5b27a620-cebf-40a3-b09c-a37f15fd135f"

const getMatchFromCache = (id, forceUpdate) =>
    forceUpdate ? Promise.resolve(null) : Promise.resolve(null);

const updateCache = (id, data) => data;

/**
 * Get match data from the server.
 */
const getMatchFromServer = matchId =>
    Promise.resolve(example.GameEvents);


const getMatchEvents = (id, forceUpdate) =>
    getMatchFromCache(id, forceUpdate)
        .then(cachedMatch =>
            cachedMatch || getMatchFromServer(id).then(matchData =>
                updateCache(id, matchData)));

class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = { matchId: props.matchId }
    }
    
    componentDidMount() {
        getMatchEvents(this.state.matchId)
            .then(events => {
                const stream = DeathStream.createFromJson(events);
                try {
                new Viewer('glcanvas').drawEvents(events);
                }catch (e) {
                    debugger;
                    
                }

            })
            .catch(x => console.error(x))
    }
    
    render() {
        return (
            <canvas id="glcanvas" className={"glCanvas"}></canvas>);
    }
}; 

weapons.getWeaponsTable();

ReactDOM.render(
    <Application matchId={matchId} />,
    document.getElementById('content'));