import React, { Component } from 'react';

class Fetch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []

        }
    }
componentDidMount() {
    fetch('http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=rush&api_key=77bc87540c83831eeb6e079b891573fc&format=json')
    .then(res => releaseEvents.json())
    .then(json => {
        this.setState({
            items: json,
        })
    });
}


}