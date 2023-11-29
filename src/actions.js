// actions.js
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export const sendMessage = (message) => ({
  type: SEND_MESSAGE,
  message,
});

export const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message,
});

// reducer.js
import { SEND_MESSAGE, RECEIVE_MESSAGE } from './actions';

const initialState = {
  messages: [],
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, { text: action.message, type: 'sent' }],
      };
    case RECEIVE_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, { text: action.message, type: 'received' }],
      };
    default:
      return state;
  }
};

export default chatReducer;


