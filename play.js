const net = require('net');
const connect = require('./client.js')
const setupInput = require('./input')
const conn = require('./client')

console.log("connecting to server");


setupInput(conn);


connect();

