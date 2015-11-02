"use strict";

import AppDispatcher from '../dispatchers/AppDispatcher';
import AppConstants from '../constants/AppConstants';

export default {

    addItem: (item) => {
        AppDispatcher.dispatch({
            actionType: AppConstants.ADD_ITEM,
            item: item
        });
    },

    clearItem: () => {
        AppDispatcher.dispatch({
            actionType: AppConstants.CLEAR_ITEM
        });
    }

}
