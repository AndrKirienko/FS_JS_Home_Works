import { io } from "socket.io-client";
import {
  deleteMessageError,
  deleteMessageSuccess,
  newMessageError,
  newMessageSuccess,
} from "../store/slices/messagesSlice";
import CONSTANTS from "../constants";

const {
  SOCKET_EVENTS: {
    NEW_MESSAGE,
    NEW_MESSAGE_SUCCESS,
    NEW_MESSAGE_ERROR,
    DELETE_MESSAGE,
    DELETE_MESSAGE_SUCCESS,
    DELETE_MESSAGE_ERROR,
  },
} = CONSTANTS;

const socketClient = io("ws://localhost:5000");

export const createMessage = (newMessage) => {
  socketClient.emit(NEW_MESSAGE, newMessage);
};

export const deleteMessage = (payload) => {
  socketClient.emit(DELETE_MESSAGE, payload);
};

export const initSocket = (store) => {
  socketClient.on(NEW_MESSAGE_SUCCESS, (payload) => {
    store.dispatch(newMessageSuccess(payload));
  });
  socketClient.on(NEW_MESSAGE_ERROR, (payload) => {
    store.dispatch(newMessageError(payload));
  });
  socketClient.on(DELETE_MESSAGE_SUCCESS, (payload) => {
    store.dispatch(deleteMessageSuccess(payload));
  });
  socketClient.on(DELETE_MESSAGE_ERROR, (payload) => {
    store.dispatch(deleteMessageError(payload));
  });
};
