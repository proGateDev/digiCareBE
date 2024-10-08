const { Server } = require('socket.io'); // Correct import for socket.io server

let io; // Define io globally

const socketService = (server) => {
  io = new Server(server, {
    cors: {
      origin: '*', // Adjust based on your needs
      methods: ['GET', 'POST'],
    },
    // transports: ['websocket'], // Use websocket transport
  });

  io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // Listen for the event to join a user room
    socket.on('joinRoom', (userId) => {
      socket.join(userId);
      console.log(`User ${userId} joined room: ${userId}`);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });
};

// Function to send notification
const sendNotification = (userId, notification) => {
  if (io) {
    console.log('============  SOCKET  ------------>',userId)
    io.to(userId).emit('notification', notification);
    // io.to(userId).emit('notification', notification);
  }
};


const sendServerDetailToClient = (data) => {
  if (io) {
    console.log('============  sendServerDetailToClient  ------------>',data)
    io.emit('getUserId', data);
  }
};




// Function to broadcast notification
const broadcastNotification = (notification) => {
  if (io) {
    io.emit('notification', notification);
  }
};

// Export the functions
module.exports = {
  socketService,
  sendNotification,
  broadcastNotification,
  sendServerDetailToClient
};
