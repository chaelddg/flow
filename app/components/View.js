"use strict";

import React from 'react';
import App from './App';
import AppStore from '../stores/AppStore';

class View extends React.Component {

    constructor() {
        super();
        this.state = this._getState();
        this._onChange = this._onChange.bind(this);
    }

    _getState() {
        return {
            items: AppStore._getItems()
        }
    }

    componentDidMount() {
        AppStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        AppStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState(this._getState());
    }

    render() {

        return (
            <div className="container">
                <h1 className="header-title">Work Space</h1>
                <App items={this.state.items} />
            </div>
        );
    }

}

module.exports = View;
