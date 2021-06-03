
let connection;

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    console.log("up")
    conn.write('Move: up')
  }
  if (key === 's') {
    console.log("down")
    conn.write('Move: down')
  }
  if (key === 'a') {
    console.log("left")
    conn.write('Move: left')
  }
  if (key === 'd') {
    console.log("right")
    conn.write('Move: right')
  }

  if (key === 't') {
    console.log("SSSSSssssssssnek")
    conn.write('Say: SSSSSssssssssnek')
  }

  if (key === 'y') {
    console.log("Nice One!")
    conn.write('Say: Nice One!')
  }
  
};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = setupInput;