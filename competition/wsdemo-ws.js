#!/usr/bin/env node

var ws = require('ws')
,   wss = new ws.Server({port:8000})

wss.on('connection', function(con) {
    
    con.on('message', con.send)

})
