import React, {Component} from 'react';
import {RoomContext} from "../context";

export default class FeatureRooms extends Component {

    static contextType = RoomContext;

    render() {
        const {name,greeting} = this.context;

        return (
            <div>
                {greeting} {name}
            </div>
        )
    }
}