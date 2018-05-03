const message = {
  addMessage: 'INSERT INTO message(title,msgCount) VALUES(?,?)', 
  getMessage: 'SELECT * FROM message',
}

module.exports = message