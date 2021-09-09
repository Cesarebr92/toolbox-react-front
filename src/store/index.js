import {createStore} from 'redux';

const initialState = {items: []};

const itemReducer = (state = initialState, action) => {
    if (action.type === 'ADD_NEW_ITEMS'){
        return {
            items: [...state.items, action.item]
        }
    }
    return state;
}

const store = createStore(itemReducer);

export default store;