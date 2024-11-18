import { io } from 'socket.io-client';

const URL = 'https://easy-connect-server.liara.run/';
// const URL = 'http://localhost:3001';

export const socket = io(URL);
