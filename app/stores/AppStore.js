"use strict";

import AppConstants from '../constants/AppConstants';
import BaseStore from './BaseStore';

var _items = {};

function testMsg(item) {
    let id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    _items[id] = {
        id: id,
        cmd: item.cmd,
        category: item.category,
        form: item.form,
        color: item.color,
        width: item.width,
        height: item.height
    }
}

class AppStore extends BaseStore {
    constructor() {
        super();
        this.subscribe(() => this._registerToActions.bind(this));
    }

    _getItems() {
        return _items;
    }

    _clearItems() {
        console.log(_items);
    }

    _registerToActions(action) {
        switch (action.actionType) {
            case AppConstants.ADD_ITEM:
                testMsg(action.item);
                this._getItems();
                this.emitChange();
                break;
            case AppConstants.CLEAR_ITEM:
                this._clearItems();
                this.emitChange();
                break;
            default:
        }
    }
}

module.exports = new AppStore();
