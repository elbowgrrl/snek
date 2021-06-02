const net = require('net');

const connect = function () {
  conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  })

   conn.setEncoding("utf-8");
   
   return conn;

};

module.exports = connect;