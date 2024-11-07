const { Server } = require('socket.io');
const { Message } = require('./models');
const {
  SOCKET_SERVER_EVENTS: { NEW_MESSAGE, NEW_MESSAGE_SUCCESS, NEW_MESSAGE_ERROR, DELETE_MESSAGE },
} = require('./constants');

const cors = { origin: '*' };

function initSocket (httpServer) {
  const wsServer = new Server(httpServer, { cors });

  wsServer.on('connection', socket => {
    console.log('Connection established');

    socket.on(NEW_MESSAGE, async payload => {
      try {
        const createdMessage = await Message.create(payload);
        wsServer.emit(NEW_MESSAGE_SUCCESS, createdMessage);
      } catch (error) {
        socket.emit(NEW_MESSAGE_ERROR, error);
      }
		});
		
		socket.on(DELETE_MESSAGE, async payload => {
			console.log(payload)
			//const deletedMessage = await Message.remove(payload)

		} );
  });
}

module.exports = initSocket;
