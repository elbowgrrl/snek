const net = require('net');

const connect = function () {
  conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  })

   conn.setEncoding("utf-8");

   conn.on('connect', () => {
     console.log("Connected to SSssssserver")
   });

   conn.on('connect', () => {
    conn.write('Name: MEV')
  });
   
   return conn;

};



module.exports = connect;