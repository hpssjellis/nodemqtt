var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://your_ip_address_of_pc')
client.on('connect', function () {
    client.subscribe('myTopic')
})
client.on('message', function (topic, message) {
context = message.toString();
console.log(context)
})
