var xmpp = require('node-xmpp');
var portfinder = require('portfinder');

portfinder.getPort(function (err, port) {
    console.log(port);
});

var client = new xmpp.Client({
    jid: '8777286739',
    password: 'Drumbi192'
})

client.on('connection', function() {
    console.log('online')
})

client.on('stanza', function(stanza) {
    console.log('Incoming stanza: ', stanza.toString())
})