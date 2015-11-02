"use strict";

import React from 'react';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';
import AppBase from './AppBase';
import '../assets/styles.js';
import '../assets/scripts.js';

class App extends AppBase {

    constructor() {
        super();
        this.state = { item: "" };
        this._bind('_onChange', '_handleClick', '_onKeyUp', '_clearState', '_clear', '_constructCommand');
    }

    _handleClick() {
        let item = React.findDOMNode(this.refs.item).value;
        if (item.trim() !== "") {

            // console.log(item);

            let itemSplit = item.split(" ");
            let itemArrSplit = [];
            let itemObj = {};

            for (var i = 0; i < itemSplit.length; i++) {
                if (itemSplit[i] !== "") {
                    itemArrSplit.push(itemSplit[i]);
                }
            }

            itemObj.cmd = itemArrSplit[0] || "";
            itemObj.category = itemArrSplit[1] || "";
            itemObj.form = itemArrSplit[2] || "";
            itemObj.color = itemArrSplit[3] || "";
            itemObj.width = (isNaN(itemArrSplit[4]) || itemArrSplit[4] == "") ? "" : itemArrSplit[4];
            itemObj.height = (isNaN(itemArrSplit[5]) || itemArrSplit[5] == "") ? "" : itemArrSplit[5];

            // console.log(itemObj);

            AppActions.addItem(itemObj);
            sweetAlert("Great...", "Write more ... !", "success");
            this._clearState();
        } else {
            sweetAlert("Oops...", "Write Something in the Input Box!", "error");
        }
    }

    _clear() {
        AppActions.clearItem();
    }

    _clearState() {
        this.setState({item: ''});
    }

    _onChange(e) {
        this.setState({item: e.target.value});
    }

    _onKeyUp(e) {
        if (e.keyCode === 13) {
            let item = React.findDOMNode(this.refs.item).value;
            if (item.trim() !== "") {

                let itemSplit = item.split(" ");
                let itemArrSplit = [];
                let itemObj = {};

                for (var i = 0; i < itemSplit.length; i++) {
                    if (itemSplit[i] !== "") {
                        itemArrSplit.push(itemSplit[i]);
                    }
                }

                itemObj.cmd = itemArrSplit[0] || "";
                itemObj.category = itemArrSplit[1] || "";
                itemObj.form = itemArrSplit[2] || "";
                itemObj.color = itemArrSplit[3] || "";
                itemObj.width = (isNaN(itemArrSplit[4]) || itemArrSplit[4] == "") ? "" : itemArrSplit[4];
                itemObj.height = (isNaN(itemArrSplit[5]) || itemArrSplit[5] == "") ? "" : itemArrSplit[5];

                if (itemObj.cmd == 'create' && itemObj.category == 'shape') {

                    if (itemObj.form == 'circle') {
                        if (itemArrSplit.length == 4) {
                            if (isNaN(itemArrSplit[3])) {
                                itemObj.color = itemArrSplit[3] || "";
                            } else {
                                itemObj.width = itemArrSplit[3];
                                itemObj.height = itemArrSplit[3];
                            }
                        }

                        if (itemArrSplit.length == 5) {
                            if (isNaN(itemArrSplit[3])) {
                                itemObj.color = itemArrSplit[3] || "";
                                itemObj.width = itemArrSplit[4];
                                itemObj.height = itemArrSplit[4];
                            } else {
                                itemObj.width = itemArrSplit[3];
                                itemObj.height = itemArrSplit[3];
                            }
                        }

                        if (itemArrSplit.length == 6) {
                            itemObj.color = itemArrSplit[3] || "";
                            itemObj.width = (isNaN(itemArrSplit[4]) || itemArrSplit[4] == "") ? "" : itemArrSplit[4];
                            itemObj.height = (isNaN(itemArrSplit[4]) || itemArrSplit[4] == "") ? "" : itemArrSplit[4];
                        }

                        if (itemArrSplit.length > 6) {
                            itemObj.color = itemArrSplit[3] || "";
                            itemObj.width = (isNaN(itemArrSplit[4]) || itemArrSplit[4] == "") ? "" : itemArrSplit[4];
                            itemObj.height = (isNaN(itemArrSplit[4]) || itemArrSplit[4] == "") ? "" : itemArrSplit[4];
                        }

                    } // ******* END OF CIRCLE

                    if (itemObj.form == 'square') {
                        if (itemArrSplit.length == 4) {

                            if (isNaN(itemArrSplit[3])) {
                                itemObj.color = itemArrSplit[3] || "";
                            } else {
                                itemObj.width = itemArrSplit[3];
                                itemObj.height = itemArrSplit[3];
                            }
                        }

                        if (itemArrSplit.length == 5) {
                            if (isNaN(itemArrSplit[3])) {
                                itemObj.color = itemArrSplit[3] || "";
                                itemObj.width = itemArrSplit[4];
                                itemObj.width = itemArrSplit[3];
                                itemObj.height = itemArrSplit[4];
                            } else {
                                itemObj.height = itemArrSplit[3];
                            }
                        }

                        if (itemArrSplit.length == 6) {
                            itemObj.color = itemArrSplit[3] || "";
                            itemObj.width = (isNaN(itemArrSplit[4]) || itemArrSplit[4] == "") ? "" : itemArrSplit[4];
                            itemObj.height = (isNaN(itemArrSplit[4]) || itemArrSplit[4] == "") ? "" : itemArrSplit[4];
                        }

                        if (itemArrSplit.length > 6) {
                            itemObj.color = itemArrSplit[3] || "";
                            itemObj.width = (isNaN(itemArrSplit[4]) || itemArrSplit[4] == "") ? "" : itemArrSplit[4];
                            itemObj.height = (isNaN(itemArrSplit[4]) || itemArrSplit[4] == "") ? "" : itemArrSplit[4];
                        }

                    } // ******* END OF SQUARE

                    if (itemObj.form == 'rectangle') {

                        if (itemArrSplit.length == 4) {

                            if (isNaN(itemArrSplit[3])) {
                                itemObj.color = itemArrSplit[3] || "";
                            } else {
                                itemObj.width = itemArrSplit[3];
                            }
                        }

                    } // ******* END OF RECTANGLE

                }

                // console.log(itemObj);
                AppActions.addItem(itemObj);
            }
        }
    }

    _constructCommand() {
        var items = this.props.items;
        var itemObj = {};
        for (var i in items) {
            itemObj.id = items[i].id.toLowerCase();
            itemObj.cmd = items[i].cmd.toLowerCase();
            itemObj.category = items[i].category.toLowerCase();
            itemObj.form = items[i].form.toLowerCase();
            itemObj.color = items[i].color;
            itemObj.width = items[i].width;
            itemObj.height = items[i].height;
        }

        return (
            <div className={itemObj.category + "-" + itemObj.form}
                style={{backgroundColor: itemObj.color, borderColor: itemObj.color, width: itemObj.width, height: itemObj.height}}></div>
        );
    }

    render() {

        return (
            <div className="wrapper">
                <input className="type_me" type="text" onKeyUp={this._onKeyUp} value={this.state.item} onChange={this._onChange} placeholder="Type here ... " ref="item" autoFocus />
                <input className="click_me" onClick={this._handleClick} unselectable="on" type="submit" value="Submit" />
                <div className="display_result">{this._constructCommand()}</div>
            </div>
        )
    }

}

module.exports = App;
