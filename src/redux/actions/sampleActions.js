import * as types from '../actionTypes'

export const connectAction = (message) => ({
    type: types.CONNECT,
    message,
});

export const disconnectAction = () => ({
    type: types.DISCONNECT,
});